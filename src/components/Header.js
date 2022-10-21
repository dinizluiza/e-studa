import "./HeaderStyles.css";

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="/images/LOGOwithoutsubt.png"></img>
      </Link>
    </div>
  );
};

export default Header;