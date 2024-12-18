import React from 'react'
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Dashboard from './Components/Modules/Dashboard';
import Notfound from './Components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Partists from './Components/Pages/Partists';
import Palbums from './Components/Pages/Palbums';
import Detail1 from './Components/Details/Detail1';
import Detail2 from './Components/Details/Detail2';
import Playlist0 from './Components/Pages/Playlist0';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/partists' element={<Partists />} />
          <Route path='/partists/:id' element={<Detail1 />} />
          <Route path='/palbums' element={<Palbums />} />
          <Route path='/palbums/:id' element={<Detail2 />} />
          <Route path='/playlist0' element={<Playlist0 />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
