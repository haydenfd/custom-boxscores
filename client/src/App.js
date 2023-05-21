import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Home from './Pages/Home';
import PreferencesForm from './Pages/PreferencesForm';

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="body-container">
        <Home></Home>
        {/* <PreferencesForm></PreferencesForm> */}
      </div>
    </div>
  );
}

export default App;
