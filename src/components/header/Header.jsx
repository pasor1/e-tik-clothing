import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.scss'

const Header = () => (
  <header className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={logo} alt="e-tik Clothing" />
      <h1 className="logo-title">
        e-tik
        <br/><span className="logo-subtitle">clothing</span>
      </h1>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/signin" className="option">
        Sign In
      </Link>
    </div>
  </header>
)

export default Header;