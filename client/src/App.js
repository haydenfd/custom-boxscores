import React, {useMemo, useState} from 'react';
import './App.css';
import {Nav} from './Components/Nav'
import {Home} from './Pages/Home';
import {PreferencesForm} from './Pages/PreferencesForm';
import {About} from './Pages/About';
import {SignIn} from './Pages/SignIn';
import {Error} from './Pages/Error';
import {GameDetails} from './Pages/gameDetails';
import { PreferencesContext } from './Context';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() 
{

  const [preferences, setPreferences] = useState([])
  const preferencesProvider = useMemo(() => ({ preferences, setPreferences }), [preferences, setPreferences]);


  return (
    <div className='App'>
      <PreferencesContext.Provider value={preferencesProvider}>
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
      </PreferencesContext.Provider>
    </div>
  );
}

export default App;
