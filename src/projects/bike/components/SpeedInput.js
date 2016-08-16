import React, { PropTypes } from 'react';
import styles from '../styles/SpeedInput.scss';

const maxCadence = 130;

const SpeedInput = (props) => {
  const labelStyles = {
    left: `${props.cadence / maxCadence * 100}%`,
  };
  const topSpeed = Math.round(props.cadence * props.gearSize * (Math.PI / 1056));

  return (
    <div className={styles.container}>
      <span
        className={styles.cadenceLabel}
        style={labelStyles}>
        Cadence
        <span className={styles.labelValue}>{props.cadence} rpm</span>
      </span>
      <input
        className={styles.range}
        type="range"
        defaultValue={props.cadence}
        onChange={props.update.bind(null, 'cadence')}
        min={1}
        max={maxCadence}
        step={1}/>
      <span
        className={styles.speedLabel}
        style={labelStyles}>
        Top speed
        <span className={styles.labelValue}>{topSpeed} mph</span>
      </span>
    </div>
  );
}

SpeedInput.propTypes = {
  cadence: PropTypes.number,
  update: PropTypes.func,
  gearSize: PropTypes.number,
};

export default SpeedInput;
