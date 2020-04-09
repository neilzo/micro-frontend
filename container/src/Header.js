import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => <header className="header__container">
  <Link to="/" className="header__links--home">
    Simple Recipe Website
  </Link>
  <div className="header__links">
    <Link to="/about">About</Link>
  </div>
</header>;

export default Header;
