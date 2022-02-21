import React from "react";

import Footer from '../Footer/Footer';

import logo  from '../../assets/logo.jpg'
import './Landing.css';


const Landing = () => {
  return <div className="ladingContainer">

    <img src={logo} alt="logoApp" className="logoApp" /> <br />
    <a href="/login"><button type="submit" className="btnAccess">Acceder</button></a>
    <Footer />

  </div>;
};

export default Landing;
