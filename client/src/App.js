import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="body-container">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
