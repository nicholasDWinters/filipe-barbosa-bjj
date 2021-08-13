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
                    <img className='img-fluid mb-3 Gallery-img' style={{ borderRadius: '50%' }} src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/189396022_10159588564563179_6998891703734069289_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=730e14&_nc_ohc=KUtFjpV_kowAX-ichgx&_nc_ht=scontent-msp1-1.xx&oh=92c14538f94ca30564ef3a80e97c74ab&oe=613AC063' alt='whitney'></img>


                </div>
                <div className='col-lg-1'></div>


            </div >
            <div className='row mt-5 justify-content-center align-items-center'>
                <div className='col-lg-5 ps-5'>
                    <div>
                        <h2 className=''>BARRY SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'I started taking Jiu Jitsu classes to take on a new physical challenge after doing kickboxing for a year, and also knowing it is a great form of self defense. I continue to practice because it is an incredible feeling to face challenges in every class and come out stronger on the other side. Jiu-Jitsu has helped me build confidence and strength that I’m not sure I would have found elsewhere.'</h5>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{ borderRadius: '50%' }} src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/227684012_4560876480590169_3757765911221557891_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Q_flL17ghC0AX86o3E_&_nc_ht=scontent-msp1-1.xx&oh=4a126d7cfd150a80ed0ca0d2a2a4d0e2&oe=613D663D' alt='barry'></img>
                </div>
                <div className='col-lg-1'></div>
            </div >

            <div className='row mt-5 justify-content-center align-items-center'>
                <div className='col-lg-5 ps-5'>
                    <div>
                        <h2 className=''>RANDY SAYS...</h2>
                        <h5 className='text-muted mb-4 about paragraph'>'I started taking Jiu Jitsu classes to take on a new physical challenge after doing kickboxing for a year, and also knowing it is a great form of self defense. I continue to practice because it is an incredible feeling to face challenges in every class and come out stronger on the other side. Jiu-Jitsu has helped me build confidence and strength that I’m not sure I would have found elsewhere.'</h5>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <img className='img-fluid mb-3 Gallery-img' style={{ borderRadius: '50%' }} src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/218434461_6625849627440876_1870866580307788752_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SLfEnwHAyKcAX-BcSn0&tn=-YeMD0LfSsy7IauL&_nc_ht=scontent-msp1-1.xx&oh=76ee9f954f83a37d3e4f44df29d5f561&oe=613C3831' alt='mike'></img>
                </div>
                <div className='col-lg-1'></div>
            </div >


        </div >
    )
}

export default WhyJJ;