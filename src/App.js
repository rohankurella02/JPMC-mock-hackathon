import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UserDashboard from './Components/Dashboard/UserDashboard/UserDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div>
      <Navbar />
      


      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/user-dashboard' element={ <UserDashboard /> } />
        <Route path='/admin-dashboard' element={ <AdminDashboard /> } />
      </Routes>
    </div>
  );
}

export default App;
