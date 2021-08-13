import React from 'react';
import '../App.css';
import Reason from './Reason';
import './GalleryImg.css';

const WhyJJ = () => {
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
    const images = ['https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/122578254_3455828431126952_1206103044608707660_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=a26aad&_nc_ohc=rfdfQpT69ycAX987Rpx&_nc_ht=scontent-msp1-1.xx&oh=b70da84754b2c83ba2e026b976efb780&oe=613C5935', 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/131707923_3603690206340773_7355919526087858945_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=a26aad&_nc_ohc=Ql_nCYbnXd0AX_qGjAv&_nc_ht=scontent-msp1-1.xx&oh=d5cf8083efbac7696f25399b0240d36d&oe=613BF20D']
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Top Reasons to Practice Jiu Jitsu</h1>

            <div className='row mt-5 justify-content-center align-items-center'>

                <div className='col-lg-5 ps-5'>
                    {reasons.slice(0, 2).map(reason => <Reason key={reason.reason} reason={reason} />)}

                </div>
                <div className='col-lg-5 ps-5'>

                    {images.slice(0, 1).map(image => <img key={image} className='img-fluid Gallery-img mb-3' src={image} alt='jiu jitsu'></img>)}

                </div>


            </div >

            <div className='row mt-2 justify-content-center align-items-center'>

                <div className='col-lg-5 ps-5'>
                    {reasons.slice(2).map(reason => <Reason key={reason.reason} reason={reason} />)}

                </div>
                <div className='col-lg-5 ps-5'>

                    {images.slice(1).map(image => <img key={image} className='img-fluid Gallery-img mb-3' src={image} alt='jiu jitsu'></img>)}

                </div>


            </div >

            <div className='row mt-5 justify-content-center align-items-center'>


                <div className='col-lg-5 ps-5'>
                    <div>
                        <h2 className=''>WHITNEY SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'I started taking Jiu Jitsu classes to take on a new physical challenge after doing kickboxing for a year, and also knowing it is a great form of self defense. I continue to practice because it is an incredible feeling to face challenges in every class and come out stronger on the other side. Jiu-Jitsu has helped me build confidence and strength that I’m not sure I would have found elsewhere.'</h5>

                    </div>

                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{}} src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/189396022_10159588564563179_6998891703734069289_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=730e14&_nc_ohc=KUtFjpV_kowAX-ichgx&_nc_ht=scontent-msp1-1.xx&oh=92c14538f94ca30564ef3a80e97c74ab&oe=613AC063' alt='whitney'></img>


                </div>
                <div className='col-lg-1'></div>


            </div >
            <div className='row mt-5 justify-content-center align-items-center'>
                <div className='col-lg-5 ps-5'>
                    <div>
                        <h2 className=''>BARRY SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'I practice Brazilian Jiu Jitsu for many reasons. The pure challenge, fitness, self defense purposes, wanting to be a ninja. But probably most importantly for the positive lifestyle changes it manifests in all areas of your life that I feel many people may need.'</h5>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{}} src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/227684012_4560876480590169_3757765911221557891_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Q_flL17ghC0AX86o3E_&_nc_ht=scontent-msp1-1.xx&oh=4a126d7cfd150a80ed0ca0d2a2a4d0e2&oe=613D663D' alt='barry'></img>
                </div>
                <div className='col-lg-1'></div>
            </div >

            <div className='row mt-5 justify-content-center align-items-center'>
                <div className='col-lg-5 ps-5'>
                    <div>
                        <h2 className=''>RANDY SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'Jiu Jitsu has made me a better husband, a better friend, a better co-worker, and an overall better person. The benefits are just as much mental as they are physical. This is a martial art that will make you a better version of the person you were before you started.
                            <br></br><br></br>
                            Professor Filipe is an excellent instructor. He has a wealth of knowledge and is always willing to share. He is friendly and kind while also pushing you past your perceived limits.'</h5>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{}} src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/218717323_6616094821749690_1111783309356526393_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=7My74yUk8PgAX80T5OO&_nc_ht=scontent-msp1-1.xx&oh=54986915772b94faaf3be3861f5ff80a&oe=613BBDDA' alt='randy'></img>
                </div>
                <div className='col-lg-1'></div>
            </div >


        </div >
    )
}

export default WhyJJ;