import React from 'react';
import '../App.css';
import Reason from './Reason';
import './GalleryImg.css';
import selfDefenseReason from '../images/selfDefenseReason.jpg';
import fitnessReason from '../images/gallery6.jpg';
import whitneyHeadshot from '../images/whitneyHeadshot.jpg';
import barryHeadshot from '../images/barryHeadshot.jpg';
import randyHeadshot from '../images/randyHeadshot.jpg';
import mikeHeadshot from '../images/mikeHeadshot.jpg';
import formPic from '../images/whybjj.jpg';
import Form from '../Form';


const WhyJJ = () => {
    const whitney = `${whitneyHeadshot}`;
    const barry = `${barryHeadshot}`;
    const randy = `${randyHeadshot}`;
    const mike = `${mikeHeadshot}`;
    const reasons = [
        {
            'reason': 'SELF-DEFENSE',
            'description': 'Learning proper Jiu Jitsu fundamentals can help you when you need it most: protecting yourself or the ones you love.'
        },
        {
            'reason': 'SELF-CONFIDENCE',
            'description': `We're all in this together. Become part of a team that encourages learning from mistakes and building each other up. Gain a mentality that allows you to not only succeed in the gym, but in all aspects of your life.`
        },
        {
            'reason': 'FITNESS',
            'description': `Become stronger, more flexible, and with better balance. Within 4 months of coming to class consistently, you will be in the best shape of your life.`
        },
        {
            'reason': 'HOME AWAY FROM HOME',
            'description': 'Be yourself and make lifelong friends. Welcome, this is your 2nd family.'
        }
    ];
    const images = [`${selfDefenseReason}`, `${fitnessReason}`];
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Top Reasons to Practice Jiu Jitsu</h1>
            
            <div className='row mt-5 justify-content-evenly align-items-center'>

                <div className='col-lg-5 ps-3'>
                    {reasons.slice(0, 2).map(reason => <Reason key={reason.reason} reason={reason} />)}

                </div>
                <div className='col-lg-5 ps-3'>
                <h5 className='paragraph about text-muted'>Interested in trying jiu jitsu? Want to schedule a free trial class? Reach out to us to learn more.</h5>
                    <Form formType={'trial class'}/>

                </div>


            </div >

            <div className='row mt-4 justify-content-evenly align-items-center'>

                <div className='col-lg-5 ps-3'>
                    {reasons.slice(2).map(reason => <Reason key={reason.reason} reason={reason} />)}

                </div>
                <div className='col-lg-5 ps-3'>

                    {images.slice(1).map(image => <img key={image} className='img-fluid Gallery-img mb-3' src={image} alt='jiu jitsu'></img>)}

                </div>


            </div >

            <div className='row mt-5 justify-content-center align-items-center'>


                <div className='col-lg-5 ps-3'>
                    <div>
                        <h2 className=''>WHITNEY SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'I started taking Jiu Jitsu classes to take on a new physical challenge after doing kickboxing for a year, and also knowing it is a great form of self defense. I continue to practice because it is an incredible feeling to face challenges in every class and come out stronger on the other side. Jiu-Jitsu has helped me build confidence and strength that I’m not sure I would have found elsewhere.'</h5>

                    </div>

                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{}} src={whitney} alt='whitney'></img>


                </div>
                <div className='col-lg-1'></div>


            </div >
            <div className='row mt-5 justify-content-center align-items-center'>
                <div className='col-lg-5 ps-3'>
                    <div>
                        <h2 className=''>BARRY SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'I practice Brazilian Jiu Jitsu for many reasons. The pure challenge, fitness, self defense purposes, wanting to be a ninja. But probably most importantly for the positive lifestyle changes it manifests in all areas of your life that I feel many people may need.'</h5>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{}} src={barry} alt='barry'></img>
                </div>
                <div className='col-lg-1'></div>
            </div >

            <div className='row mt-5 justify-content-center align-items-center'>
                <div className='col-lg-5 ps-3'>
                    <div>
                        <h2 className=''>RANDY SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'Jiu Jitsu has made me a better husband, a better friend, a better co-worker, and an overall better person. The benefits are just as much mental as they are physical. This is a martial art that will make you a better version of the person you were before you started.
                            <br></br><br></br>
                            Professor Filipe is an excellent instructor. He has a wealth of knowledge and is always willing to share. He is friendly and kind while also pushing you past your perceived limits.'</h5>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{}} src={randy} alt='randy'></img>
                </div>
                <div className='col-lg-1'></div>
            </div >
            <div className='row mt-5 justify-content-center align-items-center'>
                <div className='col-lg-5 ps-3'>
                    <div>
                        <h2 className=''>MIKE SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'I started Jiu Jitsu because I was getting out of shape and overweight. I took martial arts when I was younger, so I thought be good to get back into it. Well more than 2 years later, still going strong, lost 30 pounds since I started, and have been able to stay in good shape. On top of it, I love the mental challenge (physical chess match) it provides. It is a challenge, but well worth it. Furthermore, I enjoy it so much, I wanted to involve my daughter and got her enrolled.
                            <br></br><br></br>
                            Professor Filipe is an excellent instructor. He is always willing to push you to new limits, but he also has his gentle side to support you. Lastly, he loves answering the many questions I ask of him.'</h5>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{}} src={mike} alt='mike'></img>
                </div>
                <div className='col-lg-1'></div>
            </div >


        </div >
    )
}

export default WhyJJ;