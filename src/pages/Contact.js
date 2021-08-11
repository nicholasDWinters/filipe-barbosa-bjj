import React from 'react';
import instagram from '../images/instagram_icon.png';
import facebook from '../images/facebook_icon.png';
import API_KEY from '../api';

const Contact = () => {

    const KEY = process.env.API_KEY || API_KEY;
    let url = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgxb4aiRqB4gRS7i_qofElzA&key=${KEY}`;
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Contact</h1>


            <div className='row align-items-center'>
                <div className='col-lg-6 paragraph-col'>
                    <h1 className=''>FILIPE BARBOSA JIU JITSU</h1>
                    <h4 class="text-muted">912 WIS-136 E, STE. 104</h4>
                    <h4 class="text-muted">BARABOO, WI 53913</h4>
                    <h4 class="text-muted">608.477.0021</h4>
                    <a className='me-4' href='https://www.facebook.com/Filipe-Barbosa-Jiu-Jitsu-AcademyCRBJJ-190576607652167' target='_blank' rel='noreferrer'><img src={facebook} alt="facebook" width="30" height="30" class="d-inline-block align-text-top"></img></a>
                    <a className='me-4' href='https://www.instagram.com/filipebarbosabjj/?hl=en' target='_blank' rel='noreferrer'><img src={instagram} alt="instagram" width="30" height="30" class="d-inline-block align-text-top"></img></a>
                </div>
                <div className='col-lg-5 mt-4'>
                    <iframe title='map around academy'
                        width="100%"
                        height="400px"
                        style={{ border: '0' }}
                        loading="lazy"
                        allowfullscreen
                        src={url}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;