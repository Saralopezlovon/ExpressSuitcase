import React from "react";

import '../../scss/components/_Header.scss'

const Header = () => {
  return <header className="header-container">
    <button type="submit" className="btnBack"> &#60; Atrás </button>
    <h1  alt="logoApp" className="logoAppHeader">ExpressSuitcase!</h1>
  </header>;
};

export default Header;
