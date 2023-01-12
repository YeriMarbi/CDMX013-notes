import React from 'react';
import { Logo } from "../elements/Logo"
import './Login.css'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const auth= useAuth()
  const navigate = useNavigate();

  if(!auth.user !== null) {
    navigate('/home')
  }

  const handleGoogle =  (e) => {
    e.preventDefault()
    auth.loginWithGoogle()
    navigate('/home')
  }


  return (
    <div className="login">
      <Logo />
      <p>¡Bienvenido!</p>
      <button className="accountbtn">Crear una cuenta</button><br></br>
      <button className="googlebtn" onClick={(e)=>handleGoogle(e)} >Continuar con Google</button><br></br>
      <button className="sesionbtn">Iniciar sesión</button><br></br>
    </div>
  )

}

