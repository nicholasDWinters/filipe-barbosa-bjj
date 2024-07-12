import React from 'react';
import '../App.css';
import './Classes.css';
import Class from './Class';
import giClass from '../images/newGymGiClass.jpg'
import kidClass from '../images/kidClass.jpg';
import womensKickboxing from '../images/womensKickboxing.jpg';
import nickMatias from '../images/nickMatias.jpg';

const Classes = () => {
    const gi = `${giClass}`;
    const kids = `${kidClass}`;
    const kickboxing = `${womensKickboxing}`;
    const nickMatiasPic = `${nickMatias}`;

    let classes = [{
        type: 'GI JIU JITSU',
        description: `The foundation of Brazilian Jiu Jitsu. Each GI class starts off with a 10 minute warm-up, followed by technique instruction. Fundamentals classes involve instruction based around self-defense and basic techniques. Advanced classes typically showcase a new technique, followed by 'rolling' or light sparring with a partner.`,
        isForm: false,
        imageURL: gi,
        videoURL: null,
        title: 'gi class',
        videoHeight: null
    },
    {
        type: 'NOGI JIU JITSU',
        description: `Jiu Jitsu without the grips! A greater emphasis is placed on wrestling in this aspect of Jiu Jitsu, as NOGI presents a challenge in establishing control over your partner. Each NOGI class starts with a 10 minute warm up, followed by technique instruction, drilling, and 'rolling' or sparring.`,
        isForm: true,
        imageURL: null,
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
            <h1 className='mt-4 display-3'>Classes</h1>
            {classes.map(clss => <Class clss={clss} key={clss.type} />)}
        </div>

    )
}

export default Classes;