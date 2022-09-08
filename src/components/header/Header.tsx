import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-container">
        <img
          src="https://www.smallcase.com/static/svgs/logo-full.svg"
          alt="logo"
        />
        <button className="btn login-btn">Login</button>
      </nav>
    </header>
  );
};

export default Header;
