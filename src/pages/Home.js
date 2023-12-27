import React from 'react';
import '../App.css';
import './Home.css';
import Form from '../Form.js';
import filipeArmbarConnor from '../images/filipeArmbarConnor.jpg';
import warmUps from '../images/warmups.jpg';

const Home = () => {
    const filipeArmbar = `${filipeArmbarConnor}`;
    const formPic = `${warmUps}`;

    return (
        <div className='container'>
            <div className='row align-items-center justify-content-evenly mt-5'>
                <div className='col-lg-5 paragraph-col'>
                    <h1 className='mb-2'>READY TO START YOUR JOURNEY?</h1>
                    <h5 className='paragraph about text-muted'>Interested in trying jiu jitsu? Want to schedule a free trial class? Reach out to us to learn more.</h5>
                    <Form formType={'trialClass'}/>
                </div>


                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={formPic} alt='jiu jitsu warmup'></img>
                </div>

            </div>
         
            <div className='row align-items-center justify-content-evenly mt-5'>
                <div className='col-lg-5 paragraph-col'>
                    <h1 className='mb-4'>TOP TIER JIU JITSU INSTRUCTION</h1>
                    <h5 className='paragraph about text-muted'>Filipe Barbosa Brazilian Jiu Jitsu Academy was first opened in 2009 and has been serving the Baraboo community since then. Since its inception, it has grown in both attendance and facility. The gym now offers more than 15 classes per week between adult and children’s classes.  These classes include Brazilian Jiu Jitsu, Muay Thai, and Cardio Kickboxing. Classes are designed for participants of all levels. Further, the gym now offers periodical women’s self defense seminars and helps train several local law enforcement agencies.</h5>
                    
                </div>


                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={filipeArmbar} alt='Filipe armbar'></img>
                </div>

            </div>

            {/* <div className='row align-items-center justify-content-evenly mt-5'>

                <div className='col-lg-5 paragraph-col'>
                    <h1 className='mb-4'>OUR FACILITY</h1>
                    <h5 className='paragraph about text-muted'>Opening in 2020, our awesome new training facility is conveniently located 5 minutes from downtown Baraboo, and only a 20 minute drive from Sauk City! The beautifully designed gym features brand new FUJI training mats and punching bags, providing plenty of space for our ever-growing academy.</h5></div>

                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={punchingBags} alt='punching bags'></img>
                </div>
            </div> */}
{/* 
            <div className='row align-items-center justify-content-evenly mt-5'>

                <div className='col-lg-5 paragraph-col'>
                    <h1 className='mb-4'>YOUR NEW HOME</h1>
                    <h5 className='paragraph about text-muted'>Become apart of our Jiu Jitsu family! Meet new friends, learn to protect yourself and your family, and be more confident by learning martial arts from Owner & Head Instructor, Filipe Barbosa.</h5></div>

                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={newHome} alt='group pic'></img>
                </div>
            </div> */}

<div className='container'>
            <div className='container'>
                <div className='row mt-4 justify-content-evenly align-items-center'>

                    <div className='col-lg-6 paragraph-col ps-lg-5 ps-3'>
                        <h1 className='mt-3 day'>MONDAY</h1>

                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span d-block d-sm-inline'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span d-block d-sm-inline'>Kid - Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Fundamentals</span></h4>
                        <h4 className='Schedule-paragraph text-muted mb-3'>7PM - 8PM <span className='ms-4 Schedule-span d-block d-sm-inline'>NOGI Jiu Jitsu</span></h4>

                        <h1 className='mt-5 day'>TUESDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Fundamentals</span></h4>
                        <h4 className='Schedule-paragraph text-muted mb-3'>7PM - 8PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Advanced</span></h4>

                        <h1 className='mt-5 day'>WEDNESDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span d-block d-sm-inline'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span d-block d-sm-inline'>Kid - Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>NOGI Jiu Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>7PM - 8PM <span className='ms-4 Schedule-span d-block d-sm-inline'>MMA</span></h4>

                    </div>

                    <div className='col-lg-6 paragraph-col ps-lg-5'>
                        <h1 className='mt-5 day'>THURSDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Fundamentals</span></h4>

                        <h4 className='Schedule-paragraph text-muted'>7PM - 8PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Advanced</span></h4>

                        <h1 className='mt-5 day'>FRIDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span d-block d-sm-inline'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span d-block d-sm-inline'>Kid - Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>MMA</span></h4>

                    </div>

                </div >
            </div>

        </div >

        </div>

    )
}

export default Home;