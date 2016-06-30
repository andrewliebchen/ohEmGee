import React, { PropTypes } from 'react';
import _ from 'lodash';
import format from 'format-number';
import Tools from './Tools';
import styles from '../styles/Menubar.scss';

const Menubar = (props) =>
  <div className={styles.menubar}>
    <div className={styles.budget}>
      Budget <strong>{format({prefix: '$'})(props.budget, {integerSeparator: true})}</strong>
    </div>
    <div className={styles.notification}>
      {props.buffer ?
        <span>
          <strong>
            {_.capitalize(props.buffer)} {`$${_.find(Tools, {name: props.buffer}).price}`}
          </strong>
          <span> Place item on desk to purchase</span>
        </span>
      : null}
      {props.deleteMode ?
        <strong>Click tool to delete</strong>
      : null}
    </div>
  </div>

Menubar.propTypes = {
  buffer: PropTypes.string,
  deleteMode: PropTypes.bool,
  budget: PropTypes.number,
};

export default Menubar;
