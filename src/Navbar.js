import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Star from './images/star.svg';
import { NavLink } from 'react-router-dom';

const star = `${Star}`;
const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {

    }, [isExpanded]);

    function changeExpand() {
        setIsExpanded(false);
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
    }

    function expand() {
        setIsExpanded(true);
    }
    return (
        <div className="wrapper">
        <nav className="Navbar navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <NavLink className='navbar-brand me-5' onClick={() => changeExpand()} id='brand' exact to='/'>Filipe Barbosa BJJA</NavLink>

                <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded='false' aria-label="Toggle navigation" onClick={() => expand()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isExpanded ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarNavAltMarkup">

                    <ul className="navbar-nav me-auto">
                        <NavLink onClick={() => changeExpand()} className='nav-item me-4 nav-link' exact to='/about-us'>About Us</NavLink>
                        <NavLink onClick={() => changeExpand()} className='nav-item me-4 nav-link' exact to='/why-jj'>Why Jiu Jitsu?</NavLink>
                        <NavLink onClick={() => changeExpand()} className='nav-item me-4 nav-link' exact to='/classes'>Classes</NavLink>
                        <NavLink onClick={() => changeExpand()} className='nav-item me-4 nav-link' exact to='/schedule'>Schedule</NavLink>
                        <NavLink onClick={() => changeExpand()} className='nav-item me-4 nav-link' exact to='/seminars-promotions'>Events</NavLink>
                        <NavLink onClick={() => changeExpand()} className='nav-item nav-link' exact to='/gallery'>Gallery</NavLink>

                    </ul>
                    <NavLink onClick={() => changeExpand()} className='nav-link nav-item ps-0 me-3' exact to='/contact'>Contact</NavLink>

                    <div className="fb-messengermessageus" messenger_app_id='301920271682228' page_id='190576607652167' color="blue"></div>
                </div>
            </div>
        </nav>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="8000">
                    <div className="content">
                        <div className="stars">
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                            </div>
                        <div className="text">
                            <span className="name">Angela H.</span>
                            <span>"Great instructor, great workout!! Highly suggest this womens kickboxing class!"</span>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                <div className="content">
                <div className="content">
                        <div className="stars">
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                            </div>
                        <div className="text">
                            <span className="name">Randy I.</span>
                            <span>"Professor Filipe is super knowledgeable and a great guy to be around."</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                <div className="content">
                <div className="content">
                        <div className="stars">
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                            </div>
                        <div className="text">
                            <span className="name">Kay P.</span>
                            <span>"Filipe is so amazing with the children!"</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                <div className="content">
                <div className="content">
                        <div className="stars">
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                        <img className='star' src={star} alt=""></img>
                            </div>
                        <div className="text">
                            <span className="name">Anthony T.</span>
                            <span>"I visited a class and the entire class welcomed me as if I was a long time member."</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;