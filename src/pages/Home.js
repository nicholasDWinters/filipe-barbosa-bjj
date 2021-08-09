import React from 'react';
import '../App.css';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-6 paragraph-col'>
                    <h1 className='mb-4'>TOP TIER JIU JITSU INSTRUCTION</h1>
                    <p className='paragraph'>Filipe Barbosa Brazilian Jiu Jitsu Academy was first opened in 2009 and has been serving the Baraboo community since then. Since its inception, it has grown in both attendance and facility. The gym now offers more than 15 classes per week between adult and children’s classes.  These classes include Brazilian Jiu Jitsu, Muay Thai, and Cardio Kickboxing. Classes are designed for participants of all levels. Further, the gym now offers periodical women’s self defense seminars and helps train several local law enforcement agencies.</p></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    <img className='Home-img img-fluid' src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/126467183_3533981269978334_1875231311403248730_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=a26aad&_nc_ohc=4QoHQppwp_8AX8Janja&_nc_ht=scontent-msp1-1.xx&oh=39071dddb99557516e54a7e3e1ffe17c&oe=61371AD4' alt='Filipe armbar'></img>
                </div>
            </div>

            <div className='row align-items-center mt-5'>
                <div className='col-lg-6 paragraph-col'>
                    <h1 className='mb-4'>OUR FACILITY</h1>
                    <p className='paragraph'>Opening in 2020, our awesome new training facility is conveniently located 5 minutes from downtown Baraboo, and only a 15 minute drive from Sauk City! The beautifully designed gym features brand new FUJI training mats and punching bags, providing plenty of space for our ever-growing academy.</p></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    <img className='Home-img img-fluid' src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/126174665_3534316756611452_805468573915186833_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=a26aad&_nc_ohc=c1imMTwITMAAX8IZM4e&_nc_ht=scontent-msp1-1.xx&oh=d407bba80ee78e528192367220fac834&oe=6137F73C' alt='punching bags'></img>
                </div>
            </div>

            <div className='row align-items-center mt-5'>
                <div className='col-lg-6 paragraph-col'>
                    <h1 className='mb-4'>YOUR NEW HOME</h1>
                    <p className='paragraph'>Become apart of our jiu jitsu family! Meet new friends, learn to protect yourself and your family, and be more confident by learning martial arts from Owner & Head Instructor, Filipe Barbosa.</p></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    <img className='Home-img img-fluid' src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/124376392_3501255303250931_7852915686699227419_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=a26aad&_nc_ohc=ZuDny0ngbzQAX_XvlpV&_nc_ht=scontent-msp1-1.xx&oh=52ce777dc1573eaaa95364c87e7ba30b&oe=61371255' alt='group pic'></img>
                </div>
            </div>



        </div>

    )
}

export default Home;