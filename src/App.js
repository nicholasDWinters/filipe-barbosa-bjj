import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <Navbar />
        <Home />

      </div>

    </div>

  );
}

export default App;
