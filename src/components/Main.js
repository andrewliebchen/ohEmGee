import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from '../styles/Main.scss';

export default class App extends Component {
  render() {
    return (
      <DocumentTitle title="OhEmGee!">
        <div className={styles.container}>
          <h1 className={styles.title}>
            <strong>OhEmGee</strong> is a collection of experiments for fun and profit
          </h1>
          <nav className={styles.nav}>
            <Link to="simDesk" className={styles.navItem}>
              <span className={styles.icon}>💻</span>
              <strong>SimDesk</strong> brings the classic game to your desk
            </Link>
            <Link to="cube" className={styles.navItem}>
              <span className={styles.icon}>😎</span>
              <strong>Cube</strong> three-dee cubes in CSS
            </Link>
            <Link to="bike" className={styles.navItem}>
              <span className={styles.icon}>🚴</span>
              <strong>Bike</strong> what's this thing for?
            </Link>
          </nav>
          <footer className={styles.footer}>
            <div className={styles.bio}>
              All this stuff is made by me, <a href="http://andrewliebchen.com">Andrew Liebchen</a>.
              The source is available on <a href="https://github.com/andrewliebchen/ohemgee">Github</a>, if you're interested.
            </div>
          </footer>
        </div>
      </DocumentTitle>
    );
  }
}
