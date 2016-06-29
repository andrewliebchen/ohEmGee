import React, { PropTypes } from 'react';
import styles from '../styles/Control.scss';

const Control = (props) =>
  <tr className={styles.control}>
    <td>
      <label className={styles.label}>{props.label}</label>
    </td>
    <td>
      <input
        type="number"
        className={styles.input}
        value={props.value}
        onChange={props.action}
        min={props.min}
        max={props.max}/>
    </td>
    <td className={styles.rangeCell}>
      <input
        type="range"
        className={styles.range}
        defaultValue={props.value}
        onChange={props.action}
        min={props.min}
        max={props.max}/>
    </td>
  </tr>

Control.propTypes = {
  label: PropTypes.string,
  value:  PropTypes.number,
  action: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number
}

export default Control;
