import React from "react";

import logo  from '../../assets/logo.jpg'
import './Register.css';

//regex password: 1 en min, 1 en mayus, 1 number, un caracter raro, 8 letras minimo - 12 maximo 

const Register = () => {
  return <div>
  <img src={logo} alt="logoApp" className="logoApp" /> <br />
  <form className="formLogin" className="formLogin">

    <p className="paragrahRegister">Ingresa el email y contraseña que usarás para acceder a la app.</p>

    <label for="userEmail"><b>Email</b></label><br />
    <input type="text" placeholder="usuario@gmail.com" name="userEmail" className="userEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></input>
    
    <br /><br />
    
    <label for="userPassword"><b>Password</b></label><br />
    <input type="password" placeholder="****" name="userPassword" className="userPassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" required></input>

    <br /><br />

    <button type="submit" className="btnRegister">Regístrate</button>        

  </form>

</div>;;
};

export default Register;
