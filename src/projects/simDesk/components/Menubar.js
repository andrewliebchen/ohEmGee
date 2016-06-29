import React, { Component } from 'react';
import { ReactPageClick } from 'react-page-click';
import moment from 'moment';
import MailchimpForm from './Mailchimp';
import styles from '../styles/Menubar.scss';

class MenubarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { label, children } = this.props;
    return (
      <div className={styles.item}>
        <div
          className={children ? styles.itemLabel : styles.itemLabelDisabled}
          onClick={this.handleMenuToggle}>
          {label}
        </div>
        {this.state.open && children ?
          <ReactPageClick notify={this.handleMenuToggle}>
            <div className={styles.menu}>
              <div className={styles.container}>
                {children}
              </div>
              <div className={styles.shadow}/>
            </div>
          </ReactPageClick>
        : null}
      </div>
    );
  }

  handleMenuToggle = () => {
    this.setState({open: !this.state.open});
  }
}

export default class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({time: moment(this.state.time).add(1, 'month')});
    }, 10000);
  }

  render() {
    const { time } = this.state;
    return (
      <div className={styles.menubar}>
        <MenubarItem label="About">
          <div className={styles.content}>
            <p>
              I'm <strong>Andrew Liebchen</strong>, a human, product designer, and front-end developer, building things for startups in and around San Francisco.
            </p>
          </div>
          <a className={styles.row} href="//twitter.com/andrewliebchen" target="_blank">Twitter</a>
          <a className={styles.row} href="//dribbble.com/andrewliebchen" target="_blank">Dribbble</a>
          <a className={styles.row} href="//github.com/andrewliebchen" target="_blank">Github</a>
          <a className={styles.row} href="//www.instagram.com/andrewliebchen/" target="_blank">Instagram</a>
          <a className={styles.row} href="//www.linkedin.com/in/andrewliebchen" target="_blank">LinkedIn</a>
        </MenubarItem>
        <MenubarItem label="Projects">
          <div className={styles.content}>
            <p>
              I've been working in startups for a few years now.
              I always have some kind of side project or diversion taking my time when I'm not working on startups.
            </p>
          </div>
          <a className={styles.row}>Startup for hedge funds</a>
          <a className={styles.row}>Startup for government finances</a>
          <a className={styles.row}>Startup for search</a>
          <a className={styles.row}>Et Cetera</a>
        </MenubarItem>
        <MenubarItem label="Help">
          <div className={styles.content}>
            <p>I don't really ever send emails. But if I ever do, I can send you one.</p>
            <MailchimpForm/>
          </div>
          <a className={styles.row}>About this site</a>
          <a className={styles.row} href="mailto:andrewliebchen@gmail.com" target="_blank">Email me</a>
        </MenubarItem>
        <div className={styles.time}>
          {moment(time).format('MMM')} <strong>{moment(time).format('YYYY')}</strong>
        </div>
      </div>
    );
  }
}
