import React from "react";

import Header from '../Header/Header';

import weekend from '../../assets/img-weekend.jpg';
import week from '../../assets/img-week.jpg';

import '../../scss/components/_Menu.scss'


const Menu = () => {
  return <div className="menu">
    <Header/>
    <div>
      <p><b>¿Cuánto dura tu viaje?</b></p>
      <img src={weekend} alt="imageWeekend" className="imageWeekend" height="300" /> <br />
      <img src={week} alt="imageWeek" className="imageWeek" height="300" /> <br />
    </div>
  </div>;
};

export default Menu;
