import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UserDashboard from './Components/Dashboard/UserDashboard/UserDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard/AdminDashboard';
import Login from './Components/Login/Login';
import  {auth, db}  from './firebaseConf.js'
import {useAuthState} from 'react-firebase-hooks/auth'; 

function App() {

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } 
  }, [user]);

  return (
    <div>
      <Navbar />
      


      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/user-dashboard' element={ <UserDashboard /> } />
        <Route path='/admin-dashboard' element={ <AdminDashboard /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
