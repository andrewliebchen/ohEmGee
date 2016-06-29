import React, { Component } from 'react';
import styles from '../styles/Mailchimp.scss';

export default class MailchimpForm extends Component {
  render() {
    return (
      <form
        action="//andrew-liebchen.us5.list-manage.com/subscribe/post?u=e93b523e4e3239a13520e2bc9&amp;id=097c60528e"
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className={styles.form}
        noValidate>
      	<label className={styles.label}>Your email address</label>
        <div className={styles.container}>
        	<input
            type="email"
            name="EMAIL"
            className={styles.input}/>
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            className={styles.submit}/>
         </div>
         <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
           <input
             type="text"
             name="b_e93b523e4e3239a13520e2bc9_097c60528e"/>
         </div>
      </form>
    );
  }
}
