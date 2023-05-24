import React, {useEffect} from 'react';
import './App.css';
import {Nav} from './Components/Nav'
import {Home} from './Pages/Home';
import {PreferencesForm} from './Pages/PreferencesForm';
import {About} from './Pages/About';
import {SignIn} from './Pages/SignIn';
import {Error} from './Pages/Error';
import {GameDetails} from './Pages/gameDetails';

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() 
{
  return (
    <div className='App'>
      <Router>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/preferences' element={<PreferencesForm />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/games/:gameId' element={<GameDetails />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
