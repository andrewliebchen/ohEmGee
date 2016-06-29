import React, { Component, PropTypes } from 'react';
import styles from '../styles/Modal.scss';

export default class Modal extends Component {
  static propTypes = {
    toggle: PropTypes.func,
  }

  render() {
    const { toggle, children } = this.props;
    return(
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            {children}
          </div>
          <div className={styles.shadow}/>
        </div>
        <div className={styles.background} onClick={toggle}/>
      </div>
    );
  }
}
