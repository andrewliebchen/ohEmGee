import React, { PropTypes } from 'react';
import styles from '../styles/Input.scss';

const Input = (props) =>
  <div className={styles.inputContainer}>
    <label className={styles.label}>
      {props.label}
    </label>
    <input
      className={styles.input}
      type="number"
      defaultValue={props.defaultValue}
      onChange={props.onChange}/>
  </div>

Input.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
