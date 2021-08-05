import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (

        <nav className="Navbar navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand me-5" href="/">Filipe Barbosa BJJ</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="me-5 nav-link active" aria-current="page" href="/">About</a>
                        <a className="me-5 nav-link" href="/">Why Jiu Jitsu?</a>
                        <a className="me-5 nav-link" href="/">Classes</a>
                        <a className="me-5 nav-link" href="/">Schedule</a>
                        <a className="me-5 nav-link" href="/">Special Events</a>
                        <a className="me-5 nav-link" href="/">Gallery</a>
                        <a className="me-5 nav-link" href="/">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;