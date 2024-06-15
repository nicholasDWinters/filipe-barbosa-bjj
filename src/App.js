import './App.css';
import Jumbo from './Jumbo';
import Navbar from './Navbar';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Gallery from './pages/Gallery';
import WhyJJ from './pages/WhyJJ';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import SeminarsPromotions from './pages/SeminarsPromotions';
import Footer from './Footer';
import BookSeminar from './pages/BookSeminar';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <div className='container-fluid'>
        <Jumbo />
        <Navbar />
        <Switch>
          <Route exact path='/about-us'><About /></Route>
          <Route exact path='/why-jj'><WhyJJ /></Route>
          <Route exact path='/classes'><Classes /></Route>
          <Route exact path='/schedule'><Schedule /></Route>
          <Route exact path='/seminars-promotions'><SeminarsPromotions /></Route>
          <Route exact path='/book-seminar'><BookSeminar /></Route>
          <Route exact path='/gallery'><Gallery /></Route>
          <Route exact path='/contact'><Contact /></Route>
          <Route exact path='/'><Home /></Route>
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>

    </div>

  );
}

export default App;
