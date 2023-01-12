import React from 'react';
import { Logo } from '../elements/Logo';
import './Home.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const { logOut} = useAuth();
    const navigate = useNavigate();

const handleSignOut = async () => {
try{
await logOut()
navigate('/');
}catch (error) {
    console.log(error)
}
}

    return (
        <section className='home'>
            <div className='headerHome'>
            <Logo />
            <h1 className='welcome'>¡Bienvenido!</h1>
            </div>
            <div className='homeBtns'>
            <h2>Crea una nota para comenzar</h2>
            <button>Crear nota</button><br></br>
            <button className='logoutBtn' onClick={handleSignOut}>Salir</button>
            </div>
        </section>
    )
}



