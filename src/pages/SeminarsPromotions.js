import React from 'react';
import '../App.css';
import './Classes.css';
import guillotineSeminar from '../images/guillotineSeminar.jpg';
import copCarInFrontOfBuilding from '../images/copCarInFrontOfBuilding.jpg';
import copInFrontOfBuilding from '../images/copInFrontOfBuilding.jpg';
import adoptACopFlag from '../images/adoptACopFlag.jpg';
import newSeminar from '../images/newSeminar.jpg';
import Form from '../Form';


const SeminarsPromotions = () => {
    const guillotine = `${guillotineSeminar}`;
    const copCar = `${copCarInFrontOfBuilding}`;
    const cop = `${copInFrontOfBuilding}`;
    const adoptCop = `${adoptACopFlag}`;
    const formPic = `${newSeminar}`;
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Events</h1>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>SEMINARS</h1>
                    <h5 className='paragraph text-muted about'>We are proud to host many in-house seminars with champions of various martial arts backgrounds. Most recently, Evan Wick (2018 & 2019 All American Wrestler, UW Madison) visited us to improve our wrestling technique! We also host many Women's Self Defense seminars, and travel as a team to other seminars around the state to continue our learning!</h5></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5 mt-3 mt-lg-0'>

                    <img className='Classes-img img-fluid' src={guillotine} alt='guillotine seminar'></img>

                </div>
                <div className='col-lg-1'></div>

            </div>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className='mb-2'>INTERESTED?</h1>
                    <h5 className='paragraph about text-muted'>Interested in scheduling a seminar with Filipe for your office or gym? Reach out to learn more.</h5>
                    <Form formType={'seminar'}/>
                </div>
                <div className='col-lg-1'></div>

                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={formPic} alt='seminar'></img>
                </div>

            </div>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>Adopt a Cop</h1>
                    <h5 className='paragraph text-muted about'>We are proud to be apart of the Adopt a Cop BJJ mission, providing law enforcement officers with the knowledge to better control a combative situation. Jiu Jitsu provides officers better techniques to control suspects without excessive force, keeping everyone involved safer. For more information on Adopt a Cop BJJ, visit their website
                        <a style={{ textDecoration: 'none', fontWeight: 'bold', color: 'rgb(35, 167, 255)' }} href='https://adoptacopbjj.org/' target='_blank' rel='noreferrer'> HERE</a>  </h5>
                    <img className='Classes-img changeDisplay img-fluid mb-3 mt-3' src={copCar} alt='adopt a cop in uniform'></img>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5 mt-3 mt-lg-0'>

                    <img className='Classes-img changeDisplay img-fluid mb-3' src={adoptCop} alt='adopt a cop'></img>
                    <img className='Classes-img img-fluid' src={cop} alt='adopt a cop in uniform'></img>
                </div>
                <div className='col-lg-1'></div>

            </div>

        </div>
    )
}

export default SeminarsPromotions;