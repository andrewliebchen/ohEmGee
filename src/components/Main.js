import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from '../styles/Main.scss';

export default class App extends Component {
  render() {
    return (
      <DocumentTitle title="OhEmGee!">
        <div className={styles.container}>
          <h1 className={styles.title}><strong>OhEmGee</strong> is a collection of experiments for fun and profit</h1>
          <nav className={styles.nav}>
            <Link to="simDesk" className={styles.navItem}>
              <strong>SimDesk</strong> brings the classic game to your desk
            </Link>
            <Link to="cube" className={styles.navItem}>
              <strong>Cube</strong> three-dee cubes in CSS
            </Link>
          </nav>
        </div>
      </DocumentTitle>
    );
  }
}
