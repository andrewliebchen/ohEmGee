import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from '../styles/Main.scss';

export default class App extends Component {
  render() {
    return (
      <DocumentTitle title="OhEmGee!">
        <div className={styles.wrapper}>
          <h1>OhEmGee</h1>
          <ul>
            <li><Link to="simDesk">SimDesk</Link></li>
            <li><Link to="cube">Cube</Link></li>
          </ul>
        </div>
      </DocumentTitle>
    );
  }
}
