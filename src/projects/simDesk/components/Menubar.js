import React, { Component } from 'react';
import _ from 'lodash';
import format from 'format-number';
import Tools from './Tools';
import styles from '../styles/Menubar.scss';

export default class Menubar extends Component {
  render() {
    const { buffer, deleteMode, budget } = this.props;
    return (
      <div className={styles.menubar}>
        <div className={styles.notification}>
          {buffer ?
            <span>
              <strong>{_.capitalize(buffer)} {`$${_.find(Tools, {name: buffer}).price}`}</strong>
              <span> Place item on desk to purchase</span>
            </span>
          : null}
          {deleteMode ?
            <strong>Click tool to delete</strong>
          : null}
        </div>
        <div className={styles.budget}>
          Budget <strong>{format({prefix: '$'})(budget, {integerSeparator: true})}</strong>
        </div>
      </div>
    );
  }
}
