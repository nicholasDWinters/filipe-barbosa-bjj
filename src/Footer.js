import React from 'react';
import './Footer.css';
import instagram from './images/instagram_icon.png';
import facebook from './images/facebook_icon.png';

const Footer = () => {
    return (
        <div className='Footer mt-5 pt-5 pb-5 container-fluid'>
            <h4 className='ms-3'>FILIPE BARBOSA JIU JITSU</h4>
            <h6 className='mt-2 ms-3'>912 WIS-136 E, STE.104</h6>
            <h6 className='ms-3'>BARABOO, WI 53913</h6>
            <h6 className='ms-3'>608.477.0021</h6>
            <div className='mt-3 ms-3'>
                <a className='me-4' href='https://www.facebook.com/Filipe-Barbosa-Jiu-Jitsu-AcademyCRBJJ-190576607652167' target='_blank' rel='noreferrer'><img src={facebook} alt="facebook" width="30" height="30" className="d-inline-block"></img></a>
                <a className='me-4' href='https://www.instagram.com/filipebarbosabjj/?hl=en' target='_blank' rel='noreferrer'><img src={instagram} alt="instagram" width="30" height="30" className="d-inline-block"></img></a>
                <div className="fb-messengermessageus d-inline align-text-top" messenger_app_id='301920271682228' page_id='190576607652167' color="blue">
                </div>
            </div>
        </div>
    )
}

export default Footer;