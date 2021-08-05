import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="Navbar navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand me-5" id='brand' href="/">Filipe Barbosa BJJ</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <ul className="navbar-nav">
                        <NavLink className='nav-item me-4 nav-link' exact to='/about'>About</NavLink>
                        <NavLink className='nav-item me-4 nav-link' exact to='/why-jj'>Why Jiu Jitsu?</NavLink>
                        <NavLink className='nav-item me-4 nav-link' exact to='/classes'>Classes</NavLink>
                        <NavLink className='nav-item me-4 nav-link' exact to='/schedule'>Schedule</NavLink>

                        <NavLink className='nav-item me-4 nav-link' exact to='/gallery'>Gallery</NavLink>
                        <NavLink className='nav-item me-4 nav-link' exact to='/contact'>Contact</NavLink>

                        <li className="nav-item dropdown me-4">
                            <NavLink className='dropdown-toggle nav-link' role='button' data-bs-toggle='dropdown' exact to='/special-events' aria-expanded='false'>Special Events</NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                <NavLink className='dropdown-item' exact to='/adopt-a-cop'>Adopt a Cop Program</NavLink>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;