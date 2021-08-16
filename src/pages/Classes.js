import React from 'react';
import '../App.css';
import './Classes.css';
import Class from './Class';

const Classes = () => {

    let classes = [{
        type: 'GI JIU JITSU',
        description: `The foundation of Brazilian Jiu Jitsu. Each GI class starts off with a 10 minute warm-up, followed by technique instruction. Fundamentals classes involve instruction based around self-defense and basic techniques. Advanced classes typically showcase a new technique, followed by 'rolling' or light sparring with a partner.`,
        imageURL: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/199855222_4117296518313470_2047035072510767705_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=buCaFDIsytcAX-7aWMw&_nc_ht=scontent-msp1-1.xx&oh=18278515958fc7415d1c57b5683bb955&oe=614175F4',
        videoURL: null,
        title: 'gi class',
        videoHeight: null
    },
    {
        type: 'NOGI JIU JITSU',
        description: `Jiu Jitsu without the grips! A greater emphasis is placed on wrestling in this aspect of Jiu Jitsu, as NOGI presents a challenge in establishing control over your partner. Each NOGI class starts with a 10 minute warm up, followed by technique instruction, drilling, and 'rolling' or sparring.`,
        imageURL: `https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/162545349_3862461707130287_2182753912345385417_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=a26aad&_nc_ohc=5IFEewFEz8YAX9OTzPK&tn=toufJ2uBatHThr-7&_nc_ht=scontent-msp1-1.xx&oh=f1c888ff27344762d2ccdf0f281b80ca&oe=6136B620`,
        videoURL: null,
        title: 'nogi class',
        videoHeight: null
    },
    {
        type: 'KID - JITSU',
        description: 'An awesome way for your child to learn self defense, self confidence, and self respect! Each class focuses on Jiu Jitsu technique and movements, all while getting a ton of exercise! Respect, perseverance, honesty, and humilty are the core values we instill in every student.',
        imageURL: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/181828857_3988005467909243_8566799133568126548_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=GXzUmVm-rtAAX-QD54V&_nc_ht=scontent-msp1-1.xx&oh=ede7b5a13a629c7ce68221e6c9a4ab0f&oe=6141159E',
        videoURL: null,
        title: 'kids class',
        videoHeight: null
    },
    {
        type: 'WOMENS KICKBOXING',
        description: 'A group fitness class that combines martial arts techniques with fast paced cardio. Learn to defend yourself, and get a great workout. Never boring. Never the same.',
        imageURL: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/196744480_1176990649486018_8400221441756176404_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=8bfeb9&_nc_ohc=x0PFcOk4tdcAX9Ke91X&_nc_ht=scontent-msp1-1.xx&oh=6d6b11a9982a6bba7303453101d969b1&oe=6136C7C7',
        videoURL: null,
        title: 'womens kickboxing',
        videoHeight: null
    },
    {
        type: 'MMA',
        description: 'Mixed Martial Arts classes are more fight-oriented, with instruction geared towards Muay Thai, Jiu Jitsu, kickboxing, and wrestling techniques. Classes typically involve a short warmup or stretch, followed by technique instruction with drilling to follow. Students gain a further understanding of how to defend themselves in a combative situation.',
        imageURL: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/200905331_4114568331919622_8510669467668111477_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=a26aad&_nc_ohc=irrFWoij33oAX-d4M8W&_nc_ht=scontent-msp1-1.xx&oh=7d6b64330d09d2a71024b6a40d31c5df&oe=6138C48D',
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