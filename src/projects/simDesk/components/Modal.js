import React, { PropTypes } from 'react';
import styles from '../styles/Modal.scss';

const Modal = (props) =>
  <div className={styles.container}>
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        {props.children}
      </div>
      <div className={styles.shadow}/>
    </div>
    <div className={styles.background} onClick={props.toggle}/>
  </div>

Modal.propTypes = {
  toggle: PropTypes.func,
};

export default Modal;
