import './App.css';
import Jumbo from './Jumbo';
import Navbar from './Navbar';
import React from 'react';
import About from './pages/About';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <Jumbo />
        <Navbar />
        <Switch>
          <Route exact path='/about'><About /></Route>
          {/* <Route exact path='/why-jj'><WhyJJ /></Route>
        <Route exact path='/classes'><Classes /></Route>
        <Route exact path='/schedule'><Schedule /></Route>
        <Route exact path='/special-events'><SpecialEvents /></Route>
        <Route exact path='/adopt-a-cop'><AdoptACop /></Route>
        <Route exact path='/gallery'><Gallery /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/'><Home /></Route> */}
        </Switch>
      </div>

    </div>

  );
}

export default App;
