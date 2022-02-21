import React from "react";

import logoPrueba  from '../../assets/logoPrueba.jpg';

import './Login.css';

const Login = () => {
  return <div>
    <img src={logoPrueba} alt="logoApp" className="logoApp" /> <br />
    <form className="formLogin" className="formLogin">

      <label for="userEmail"><b>Email</b></label><br />
      <input type="text" placeholder="usuario@gmail.com" name="userEmail" className="userEmail" required></input>
      
      <br /><br />
      
      <label for="userPassword"><b>Password</b></label><br />
      <input type="password" placeholder="****" name="userPassword" className="userPassword" required></input>

      <br /><br />

      <button type="submit" className="btnLogin">Acceder</button>        

    </form>

    <p className="paragrahLogin">¿No tienes cuenta? <a href="/signup" className="linkRegister" ><b>Regístrate</b></a></p>

  </div>;
};

export default Login;
