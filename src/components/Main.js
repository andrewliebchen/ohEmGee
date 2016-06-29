import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../styles/Main.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        Hello World!
        <ul>
          <li><Link to="/simDesk">SimDesk</Link></li>
          <li><Link to="/cube">Cube</Link></li>
        </ul>
      </div>
    );
  }
}
