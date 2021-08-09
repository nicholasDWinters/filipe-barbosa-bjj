import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import instagram from './images/instagram_icon.png';
import facebook from './images/facebook_icon.png';


const Navbar = () => {
    return (

        <nav className="Navbar navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <NavLink className='navbar-brand me-5' id='brand' exact to='/'>Filipe Barbosa BJJA</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <ul className="navbar-nav me-auto">
                        <NavLink className='nav-item me-4 nav-link' exact to='/about-us'>About Us</NavLink>
                        <NavLink className='nav-item me-4 nav-link' exact to='/why-jj'>Why Jiu Jitsu?</NavLink>
                        <NavLink className='nav-item me-4 nav-link' exact to='/classes'>Classes</NavLink>
                        <NavLink className='nav-item me-4 nav-link' exact to='/schedule'>Schedule</NavLink>
                        <NavLink className='nav-item me-4 nav-link' exact to='/seminars-promotions'>Seminars / Promotions</NavLink>
                        <NavLink className='nav-item nav-link' exact to='/gallery'>Gallery</NavLink>

                    </ul>
                    <NavLink className='nav-link nav-item ps-0 me-3' exact to='/contact'>Contact</NavLink>
                    <a className='me-4' href='https://www.facebook.com/Filipe-Barbosa-Jiu-Jitsu-AcademyCRBJJ-190576607652167' target='_blank' rel='noreferrer'><img src={facebook} alt="facebook" width="30" height="30" class="d-inline-block align-text-top"></img></a>
                    <a className='me-4' href='https://www.instagram.com/filipebarbosabjj/?hl=en' target='_blank' rel='noreferrer'><img src={instagram} alt="instagram" width="30" height="30" class="d-inline-block align-text-top"></img></a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;