import React from 'react';
import {NavLink} from 'react-router-dom';
import './Jumbo.css';

const Jumbo = () => {
    return (
        <div>
            <div className='Jumbo-jumbo'>
                <h1 className='display-4 ps-5 px-5'><b><span>FILIPE BARBOSA </span>JIU JITSU</b></h1>
                    <NavLink exact to="/book-seminar">
                <button className='btn btn-lg d-block'>

                    Book a Corporate or Self Defense Seminar!
                    </button>
                    </NavLink>
            </div>

        </div>
    );
}

export default Jumbo;