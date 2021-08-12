import React from 'react';
import '../App.css';
import './Classes.css';

const SeminarsPromotions = () => {
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Seminars / Promotions</h1>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>Seminars</h1>
                    <p className='paragraph'>We are proud to host many in-house seminars with champions of various martial arts backgrounds. Most recently, Evan Wick (2018 & 2019 All American Wrestler, UW Madison) visited us to improve our wrestling technique! We also host many Women's Self Defense seminars, and travel as a team to other seminars around the state to continue our learning!</p></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>

                    <img className='Classes-img img-fluid' src='https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/233256727_4254143174628803_8082353878989537867_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=a26aad&_nc_ohc=jEIKa2iJeWMAX8H29X8&_nc_ht=scontent-msp1-1.xx&oh=070689b3ee7767d58883d1e986771cf8&oe=61164E9D' alt='guillotine seminar'></img>

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

                    <img className='Classes-img img-fluid' src='https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/228770541_4268440049865782_3827715661685017254_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=a26aad&_nc_ohc=ne0q5niV6GIAX_ZaUOf&_nc_ht=scontent-msp1-1.xx&oh=e52273d285836764dc82ae2130c4d4dd&oe=6116907B' alt='womens self defense group pic'></img>
                </div>
                <div className='col-lg-1'></div>
            </div>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>Adopt a Cop</h1>
                    <p className='paragraph'>We are proud to be apart of the Adopt a Cop BJJ mission, providing law enforcement officers with the knowledge to better control a combative situation. Jiu Jitsu provides officers better techniques to control suspects without excessive force, keeping everyone involved safer. For more information on Adopt a Cop BJJ, visit their website
                        <a style={{ textDecoration: 'none', fontWeight: 'bold', color: 'rgb(35, 167, 255)' }} href='https://adoptacopbjj.org/' target='_blank' rel='noreferrer'> HERE</a>  </p></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>

                    <img className='Classes-img img-fluid' src='https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/229130450_4239955289380925_7834398021083067640_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=a26aad&_nc_ohc=S-mLmcWk_rIAX-Qx8dR&_nc_ht=scontent-msp1-1.xx&oh=5db3d5445687920385bab68343b234a1&oe=6116387A' alt='adopt a cop'></img>

                </div>
                <div className='col-lg-1'></div>

            </div>
        </div>
    )
}

export default SeminarsPromotions;