import React from "react";

import Footer from '../Footer/Footer';

import logoPrueba  from '../../assets/logoPrueba.jpg'
import './Landing.css';


const Landing = () => {
  return <div className="ladingContainer">

    <img src={logoPrueba} alt="logoApp" className="logoApp" /> <br />
    <a href="/login"><button type="submit" className="btnAccess">Acceder</button></a>
    <Footer />

  </div>;
};

export default Landing;
