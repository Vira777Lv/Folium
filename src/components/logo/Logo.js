import React from 'react';
// import SvgIcon from '../icons/SvgIcon';

import logoIcon from './icon/logo.png';
import styles from './Logo.css';


function Logo() {
  return(
    <div className={styles.logoWrapper}>
      <a href="#" title="Folium logo" className={styles.logo}>
        Folium &amp; StoryBook
        <img src={logoIcon} className={styles.imgLogo} alt="Folium&StoryBook logo"/>
      </a>
      {/*<SvgIcon glyph={logoIcon} size={30} />*/}
    </div>
  )
}

export default Logo;
