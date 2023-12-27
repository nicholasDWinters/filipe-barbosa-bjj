import React from 'react';
import '../App.css';
import './Home.css';
import Form from '../Form.js';
import filipeArmbarConnor from '../images/filipeArmbarConnor.jpg';
import warmUps from '../images/warmups.jpg';
import './Classes.css';
import Class from './Class';
import nogiLineup from '../images/nogiLineup.jpg';
import kidClass from '../images/kidClass.jpg';
import womensKickboxing from '../images/womensKickboxingClass.jpg';
import nickMatias from '../images/nickMatias.jpg';
import giClass from '../images/giClass.jpg';

const Home = () => {
    const filipeArmbar = `${filipeArmbarConnor}`;
    const formPic = `${warmUps}`;
    const nogi = `${nogiLineup}`;
    const kids = `${kidClass}`;
    const kickboxing = `${womensKickboxing}`;
    const nickMatiasPic = `${nickMatias}`;
    const giPic = `${giClass}`;

    let classes = [{
        type: 'GI JIU JITSU',
        description: `The foundation of Brazilian Jiu Jitsu. Each GI class starts off with a 10 minute warm-up, followed by technique instruction. Fundamentals classes involve instruction based around self-defense and basic techniques. Advanced classes typically showcase a new technique, followed by 'rolling' or light sparring with a partner.`,
        imageURL: giPic,
        videoURL: null,
        title: 'gi class',
        videoHeight: null
    },
    {
        type: 'NOGI JIU JITSU',
        description: `Jiu Jitsu without the grips! A greater emphasis is placed on wrestling in this aspect of Jiu Jitsu, as NOGI presents a challenge in establishing control over your partner. Each NOGI class starts with a 10 minute warm up, followed by technique instruction, drilling, and 'rolling' or sparring.`,
        imageURL: nogi,
        videoURL: null,
        title: 'nogi class',
        videoHeight: null
    },
    {
        type: 'KID - JITSU',
        description: 'An awesome way for your child to learn self defense, self confidence, and self respect! Each class focuses on Jiu Jitsu technique and movements, all while getting a ton of exercise! Respect, perseverance, honesty, and humilty are the core values we instill in every student.',
        imageURL: kids,
        videoURL: null,
        title: 'kids class',
        videoHeight: null
    },
    {
        type: 'WOMENS KICKBOXING',
        description: 'A group fitness class that combines martial arts techniques with fast paced cardio. Learn to defend yourself, and get a great workout. Never boring. Never the same.',
        imageURL: kickboxing,
        videoURL: null,
        title: 'womens kickboxing',
        videoHeight: null
    },
    {
        type: 'MMA',
        description: 'Mixed Martial Arts classes are more fight-oriented, with instruction geared towards Muay Thai, Jiu Jitsu, kickboxing, and wrestling techniques. Classes typically involve a short warmup or stretch, followed by technique instruction with drilling to follow. Students gain a further understanding of how to defend themselves in a combative situation.',
        imageURL: nickMatiasPic,
        videoURL: null,
        title: 'mma training',
        videoHeight: null
    }]

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
            {classes.map(clss => <Class clss={clss} key={clss.type} />)}
  
        

        </div>

    )
}

export default Home;