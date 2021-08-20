import React from 'react';
import '../App.css';
import './Classes.css';
import guillotineSeminar from '../images/guillotineSeminar.jpg';
import womensSelfDefense from '../images/womensSelfDefense.jpg';
import copCarInFrontOfBuilding from '../images/copCarInFrontOfBuilding.jpg';
import copInFrontOfBuilding from '../images/copInFrontOfBuilding.jpg';
import adoptACopFlag from '../images/adoptACopFlag.jpg';


const SeminarsPromotions = () => {
    const guillotine = `${guillotineSeminar}`;
    const womens = `${womensSelfDefense}`;
    const copCar = `${copCarInFrontOfBuilding}`;
    const cop = `${copInFrontOfBuilding}`;
    const adoptCop = `${adoptACopFlag}`;
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Seminars / Promotions</h1>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>Seminars</h1>
                    <h5 className='paragraph text-muted about'>We are proud to host many in-house seminars with champions of various martial arts backgrounds. Most recently, Evan Wick (2018 & 2019 All American Wrestler, UW Madison) visited us to improve our wrestling technique! We also host many Women's Self Defense seminars, and travel as a team to other seminars around the state to continue our learning!</h5></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>

                    <img className='Classes-img img-fluid' src={guillotine} alt='guillotine seminar'></img>

                </div>
                <div className='col-lg-1'></div>

            </div>
            <div className='row align-items-center justify-content-evenly mt-3'>
                <div className='col-lg-2'></div>
                <div className='col-lg-3 mb-2'>
                    <iframe title='wrestling seminar' src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F2938527446464526%2F&show_text=false&width=267&t=0" width="294" height="524" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className='col-lg-1'></div>

                <div className='col-lg-6'>

                    <img className='Classes-img img-fluid' src={womens} alt='womens self defense group pic'></img>
                </div>
                <div className='col-lg-1'></div>
            </div>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>Adopt a Cop</h1>
                    <h5 className='paragraph text-muted about'>We are proud to be apart of the Adopt a Cop BJJ mission, providing law enforcement officers with the knowledge to better control a combative situation. Jiu Jitsu provides officers better techniques to control suspects without excessive force, keeping everyone involved safer. For more information on Adopt a Cop BJJ, visit their website
                        <a style={{ textDecoration: 'none', fontWeight: 'bold', color: 'rgb(35, 167, 255)' }} href='https://adoptacopbjj.org/' target='_blank' rel='noreferrer'> HERE</a>  </h5>
                    <img className='Classes-img img-fluid mb-3 mt-3' src={copCar} alt='adopt a cop in uniform'></img>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>

                    <img className='Classes-img img-fluid mb-3' src={adoptCop} alt='adopt a cop'></img>
                    <img className='Classes-img img-fluid' src={cop} alt='adopt a cop in uniform'></img>
                </div>
                <div className='col-lg-1'></div>

            </div>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4'>


                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>



                </div>
                <div className='col-lg-1'></div>

            </div>
        </div>
    )
}

export default SeminarsPromotions;