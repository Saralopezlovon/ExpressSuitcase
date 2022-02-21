//import React, { useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { suitcaseContext } from './context/suitcaseContext'; 
//import axios from 'axios';

import Main from './components/Main/Main';

import './App.css';
import './Normalize.css';

function App(props) {

  const dataSuitcase = {}

  return (
    <div className="App">
      <BrowserRouter> 
          <suitcaseContext.Provider value={dataSuitcase} >    
            <Main/> 
          </suitcaseContext.Provider>            
      </BrowserRouter>      
    </div>
  );
}

export default App;
