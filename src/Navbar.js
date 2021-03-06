import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {

    }, [isExpanded]);

    function changeExpand() {
        setIsExpanded(false);

    }

    function expand() {
        setIsExpanded(true);
    }
    return (

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
                        <NavLink onClick={() => changeExpand()} className='nav-item me-4 nav-link' exact to='/seminars-promotions'>Seminars / Promotions</NavLink>
                        <NavLink onClick={() => changeExpand()} className='nav-item nav-link' exact to='/gallery'>Gallery</NavLink>

                    </ul>
                    <NavLink onClick={() => changeExpand()} className='nav-link nav-item ps-0 me-3' exact to='/contact'>Contact</NavLink>

                    <div className="fb-messengermessageus" messenger_app_id='301920271682228' page_id='190576607652167' color="blue"></div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;