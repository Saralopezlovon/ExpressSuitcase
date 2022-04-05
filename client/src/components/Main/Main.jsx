import React from "react";
import {Route, Routes} from 'react-router-dom'; //Para las rutas

import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
import Register from '../Register/Register';
import NewSuitcase from "../NewSuitcase/NewSuitcase";

import '../../scss/components/_Main.scss'

const Main = () => {
  return (<main>
    <Routes> 
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/lobby" element={<Menu />} />
      <Route path="/newsuitcase" element={<NewSuitcase />} />
    </Routes>
  </main>);
};

export default Main;
