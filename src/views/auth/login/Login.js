import React, { Component } from 'react'

import styles from './Login.css';

export default class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements[0].value;
    window.localStorage.setItem('rr_login', value)
  }
  render() {
    return (
      <div className={styles.login}>
        <form onSubmit={this.handleSubmit}>
          <h1>A Login page will be here</h1>
        </form>
      </div>
    )
  }
}
