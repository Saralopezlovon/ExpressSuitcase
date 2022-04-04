import React from "react";

import Footer from '../Footer/Footer';


import '../../scss/components/_Landing.scss'


const Landing = () => {
  return <div className="ladingContainer">
    <h1  alt="logoApp" className="logoAppHeader">ExpressSuitcase!</h1>
    <a href="/login"><button type="submit" className="btnAccess">Acceder</button></a>
    <Footer />

  </div>;
};

export default Landing;
