import React, { PropTypes } from 'react';
import styles from '../styles/Cube.scss';

const Primative = (props) => {
  const rotateX = `rotateX(-${props.orbitX}deg)`;
  const rotateY = `rotateY(${props.zAngle + props.anaglyphRotate}deg)`;
  const rotateZ = `rotateZ(${props.orbitY}deg)`;

  return (
    <div
      className={styles.cube}
      style={{transform: `translate3d(-50%, -50%, 0) ${rotateX} ${rotateY} ${rotateZ}`}}>
      <div className={styles.frontFace}/>
      <div className={styles.backFace}/>
      <div className={styles.leftFace}/>
      <div className={styles.rightFace}/>
      <div className={styles.topFace}/>
      <div className={styles.bottomFace}/>
    </div>
  );
}


const Cube = (props) => {
  const interaxial = props.zoom / 30;
  const anaglyphRotate = Math.atan(props.zoom / interaxial);

  return (
    <div className={styles.cubes}>
      <div
        className={styles.anaglyphLeft}
        style={{marginLeft: `-${interaxial}px`}}>
        <Primative {...props} anaglyphRotate={anaglyphRotate}/>
      </div>
      <div
        className={styles.anaglyphRight}
        style={{marginLeft: `${interaxial}px`}}>
        <Primative {...props}  anaglyphRotate={anaglyphRotate * -1}/>
      </div>
    </div>
  );
}

Cube.propTypes = {
  orbitX: PropTypes.number,
  zAngle: PropTypes.number,
  orbitY: PropTypes.number,
  anaglyph: PropTypes.bool
};

export default Cube;
