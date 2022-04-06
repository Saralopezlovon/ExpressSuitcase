import React from "react";

import '../../scss/components/_Login.scss'

const Login = () => {
  return <div className="login">
    <h1  alt="logoApp" className="logoAppHeader">ExpressSuitcase!</h1>
    <form className="formLogin">

      <label for="userEmail"><b>Email</b></label><br />
      <input type="text" placeholder="usuario@gmail.com" name="userEmail" className="userEmail" required></input>
      
      <br /><br />
      
      <label for="userPassword"><b>Password</b></label><br />
      <input type="password" placeholder="****" name="userPassword" className="userPassword" required></input>

      <br /><br />

      <div className="btnContainer"><button type="submit" className="btnLogin">Acceder</button></div>        
      <p className="paragrahLogin">¿No tienes cuenta? <a href="/signup" className="linkRegister" ><b>Regístrate</b></a></p>
    </form>

    

  </div>;
};

export default Login;
