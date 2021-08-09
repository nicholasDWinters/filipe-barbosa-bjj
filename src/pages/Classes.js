import React from 'react';
import '../App.css';
import './Classes.css';

const Classes = () => {
    let classObj = {
        'gi': `The foundation of Brazilian Jiu Jitsu. Each GI class starts off with a 10 minute warm-up, followed by technique instruction. Beginner classes involve instruction based around self-defense and basic techniques. Advanced classes typically showcase a new technique, followed by 'rolling' or light sparring with a partner.`,
        'giImage': `https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/184851016_4027520877291035_3831411766264798834_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=a26aad&_nc_ohc=L7VqPsE1CaMAX-VUxEm&_nc_ht=scontent-msp1-1.xx&oh=c17aba0c764fad0a04ce0c673b0e31c7&oe=61378DB4`,
        'nogi': `Jiu Jitsu without the grips! A greater emphasis is placed on wrestling in this aspect of jiu jitsu, as NOGI presents a challenge in establishing control over your partner. Each NOGI class starts with a 10 minute warm up, followed by technique instruction, drilling, and 'rolling' or sparring.`,
        'nogiImage': `https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/162545349_3862461707130287_2182753912345385417_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=a26aad&_nc_ohc=5IFEewFEz8YAX9OTzPK&tn=toufJ2uBatHThr-7&_nc_ht=scontent-msp1-1.xx&oh=f1c888ff27344762d2ccdf0f281b80ca&oe=6136B620`
    }
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Classes</h1>
            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>GI JIU JITSU</h1>
                    <p className='paragraph'>{classObj.gi}</p></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    {/* <img className='Classes-img img-fluid' src={classObj.giImage} alt='gi drilling'></img>
                     */}
                    <iframe title='gi drilling' src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F3856199821089809%2F&show_text=false&width=560&t=0" width="560" height="315" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

                </div>
                <div className='col-lg-1'></div>
            </div>

            <div className='row align-items-center mt-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-4 paragraph-col'>
                    <h1 className=''>NOGI JIU JITSU</h1>
                    <p className='paragraph'>{classObj.nogi}</p></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    <img className='Classes-img img-fluid' src={classObj.nogiImage} alt='nogi drilling'></img>


                </div>
                <div className='col-lg-1'></div>
            </div>
        </div>

    )
}

export default Classes;