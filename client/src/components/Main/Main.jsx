import React from "react";
import {Route, Routes} from 'react-router-dom'; //Para las rutas

import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';

import './Main.css';

const Main = () => {
  return (<main>
    <Routes> 
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/lobby" element={<Menu />} />
    </Routes>
  </main>);
};

export default Main;
