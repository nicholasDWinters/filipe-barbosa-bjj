import React from 'react';
import instagram from '../images/instagram_icon.png';
import facebook from '../images/facebook_icon.png';
import messenger from '../images/messenger_icon.png';
// import API_KEY from '../api';
import './Contact.css';


const Contact = () => {

    const KEY = process.env.REACT_APP_API_KEY;

    // const KEY = process.env.API_KEY;
    let url = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgxb4aiRqB4gRS7i_qofElzA&key=${KEY}`;

    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Contact</h1>


            <div className='row align-items-center'>
                <div className='col-lg-6 paragraph-col mb-5'>
                    <h1 className=''>FILIPE BARBOSA JIU JITSU</h1>
                    <h4 className="text-muted">912 WIS-136 E, STE. 104</h4>
                    <h4 className="text-muted">BARABOO, WI 53913</h4>
                    <h4 className="text-muted mb-3">608.477.0021</h4>
                    <a href='https://www.facebook.com/Filipe-Barbosa-Jiu-Jitsu-AcademyCRBJJ-190576607652167' target='_blank' rel='noreferrer'><img src={facebook} alt="facebook" width="45" height="45" className="d-inline-block align-text-top me-4"></img></a>
                    <a href='https://www.instagram.com/filipebarbosabjj/?hl=en' target='_blank' rel='noreferrer'><img src={instagram} alt="instagram" width="45" height="45" className="d-inline-block align-text-top me-4"></img></a>
                    {/* <div className='d-block mt-3 mb-3'>
                        <div className="fb-messengermessageus" messenger_app_id='301920271682228' page_id='190576607652167' color="blue">
                        </div>
                    </div> */}
                    <a href='https://www.messenger.com/t/190576607652167/?messaging_source=source%3Apages%3Amessage_shortlink' className='btn btn-outline-primary mt-3' target='_blank' rel='noreferrer'><img src={messenger} alt="messenger" width="45" height="45" className="d-inline-block me-1"></img>Chat with us on Messenger</a>

                </div>
                <div className='col-lg-5'>
                    <iframe title='map around academy'
                        width="100%"
                        height="400px"
                        style={{ border: '0' }}
                        loading="lazy"
                        src={url}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;