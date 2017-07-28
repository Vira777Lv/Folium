import React from 'react';

import Header from '../header/Header';
// import Banner from '../banner/Banner';
// import Footer from '../footer/Footer';
import HomePage from '../homePage/HomePage';

import styles from './App.css';

const App = ({children}) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
};

export default App;
