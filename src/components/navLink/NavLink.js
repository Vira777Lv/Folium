import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './NavLink.css';

export default class NavLink extends Component {
  render() {
    return <Link {...this.props} activeClassName={styles.active}/>
  }
}
