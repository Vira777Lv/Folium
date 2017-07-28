import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import { Link } from 'react-router';

import NavLink from '../../components/navLink/NavLink';

import Logo from '../../components/logo/Logo';

import styles from './Header.css';

function Header () {
  return(
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.mainMenu}>
          <li><NavLink to='/'>Головна</NavLink></li>
          <li><NavLink to='/books'>Книжкова полиця</NavLink></li>
        </ul>
      </nav>
      <ul className={styles.authorization}>
        <li><Link to={'/sign-up'}>Реєстрація</Link></li>
        <li><Link to={'/login'}>Увійти</Link></li>
      </ul>
    </header>
  )
}

export default Header;
