import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header__logo"><img src="/images/js-logo-dk.png" alt="logo" /></div>
    <nav className="nav">
      <a href='#top' className="nav__item">Home</a>
      <a href='#about' className="nav__item">About</a>
      <a href='#contact' className="nav__item">Contact</a>
    </nav>
  </header>
);

export default Header;