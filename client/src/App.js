import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Home from './Pages/Home';
import PreferencesForm from './Pages/PreferencesForm';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import Error from './Pages/Error';

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() 
{
  return (
    <div className='App'>
      <Nav></Nav>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/preferences' element={<PreferencesForm />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
