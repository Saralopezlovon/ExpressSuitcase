import React from "react";
import Header from '../Header/Header';
import suitcase  from '../../assets/suitcase.JPG';

import '../../scss/components/_NewSuitcase.scss'

const NewSuitcase = () => {
  return <div className="newSuitCase">
      <Header />
      <label for="nameSuitcase">Nombre de la maleta:</label> <br />
      <input type="text" id="nameSuitcase" name="nameSuitcase" required ></input><br />
      <img src={suitcase} alt="suitcase" className="suitcase" /> <br />
      <input type="submit" value="Guardar"></input>
    </div>;
};

export default NewSuitcase;
