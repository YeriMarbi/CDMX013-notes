import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Login } from './noauth/Login';
import { Home } from './auth/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
