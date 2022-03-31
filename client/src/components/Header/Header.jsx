import React from "react";

import logo  from '../../assets/logo.jpg';
import '../../scss/components/_Header.scss'

const Header = () => {
  return <header className="header-container">
    <button type="submit" className="btnBack"> &#60; Atrás </button>
    <img src={logo} alt="logoApp" className="logoAppHeader" />
  </header>;
};

export default Header;
