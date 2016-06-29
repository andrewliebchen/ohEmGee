import React, { PropTypes } from 'react';
import styles from '../styles/Scene.scss';

// Horizon angle gets messed up when orbitX is set > 90 < 270...breaks the horizon illusion
const Scene = (props) =>
  <span>
    <div
      className={styles.scene}
      style={{
        perspective: `${props.zoom}px`,
        perspectiveOrigin: `${props.panX}% ${props.panY}%`,
        top: `${props.panHorizon}%`,
        left: `${props.panX}%`
      }}>
      {props.children}
    </div>
    <div
      className={styles.horizon}
      style={{
        top: `${props.panHorizon + props.orbitHorizon - 50}%`,
        transform: `rotate(${props.orbitY}deg)`,
        bottom: props.orbitY > 90 ? 'auto' : '-9999px'
      }}/>
  </span>

Scene.propTypes = {
  zoom: PropTypes.number,
  panX: PropTypes.number,
  panY: PropTypes.number,
  panHorizon: PropTypes.number,
  orbitHorizon: PropTypes.number,
  orbitY: PropTypes.number
};

export default Scene;
