import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.container}>
    <Link to="/" className={styles.linksHome}>
      Simple Recipe Website
    </Link>
    <div className={styles.links}>
      <Link to="/about">About</Link>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  </header>
);

export default Header;
