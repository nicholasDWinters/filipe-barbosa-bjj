import React from 'react';
import '../App.css';
import './Classes.css';
import Class from './Class';

const Classes = () => {

    let classes = [{
        type: 'GI JIU JITSU',
        description: `The foundation of Brazilian Jiu Jitsu. Each GI class starts off with a 10 minute warm-up, followed by technique instruction. Beginner classes involve instruction based around self-defense and basic techniques. Advanced classes typically showcase a new technique, followed by 'rolling' or light sparring with a partner.`,
        imageURL: null,
        videoURL: 'https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F3856199821089809%2F&show_text=false&width=560&t=0',
        title: 'gi drilling',
        videoHeight: 315
    },
    {
        type: 'NOGI JIU JITSU',
        description: `Jiu Jitsu without the grips! A greater emphasis is placed on wrestling in this aspect of jiu jitsu, as NOGI presents a challenge in establishing control over your partner. Each NOGI class starts with a 10 minute warm up, followed by technique instruction, drilling, and 'rolling' or sparring.`,
        imageURL: `https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/162545349_3862461707130287_2182753912345385417_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=a26aad&_nc_ohc=5IFEewFEz8YAX9OTzPK&tn=toufJ2uBatHThr-7&_nc_ht=scontent-msp1-1.xx&oh=f1c888ff27344762d2ccdf0f281b80ca&oe=6136B620`,
        videoURL: null,
        title: 'nogi class',
        videoHeight: null
    },
    {
        type: 'KIDS JIU JITSU',
        description: 'An awesome way for your child to learn self defense, self confidence, and self respect! Each class focuses on jiu jitsu technique and movements, all while getting a ton of exercise! Respect, perseverance, honesty, and humilty are the core values we instill in every student.',
        imageURL: null,
        videoURL: 'https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F169960754549410%2F&show_text=false&width=560&t=0',
        title: 'kids class',
        videoHeight: 420
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
        description: 'Mixed Martial Arts classes are more fight-oriented, with instruction geared towards boxing, muay thai, jiu jitsu, and wrestling techniques. Classes typically involve a short warmup or stretch, followed by technique instruction with drilling to follow. Students gain a further understanding of how to defend themselves in a combative situation.',
        imageURL: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/200905331_4114568331919622_8510669467668111477_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=a26aad&_nc_ohc=irrFWoij33oAX-d4M8W&_nc_ht=scontent-msp1-1.xx&oh=7d6b64330d09d2a71024b6a40d31c5df&oe=6138C48D',
        videoURL: null,
        title: 'mma training',
        videoHeight: null
    },
    {
        type: 'COMPETITION TRAINING',
        description: `Many of our students compete at several tournaments per year. Competition training starts with an hour of conditioning (circuit training workout), followed by competition-based instruction and situational drilling or sparring.`,
        imageURL: null,
        videoURL: 'https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F4105267972849658%2F&show_text=false&width=560&t=0',
        title: 'competition training',
        videoHeight: 315
    }]
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Classes</h1>
            {classes.map(clss => <Class clss={clss} key={clss.type} />)}
        </div>

    )
}

export default Classes;