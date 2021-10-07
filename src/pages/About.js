import React from 'react';
import cristianoHeadshot from '../images/cristianoHeadshot.jpg';
import filipeHeadshot from '../images/filipeHeadshot.jpg';
import willHeadshot from '../images/willHeadshot.jpg';

const About = () => {
    const cristiano = `${cristianoHeadshot}`;
    const filipe = `${filipeHeadshot}`;
    const will = `${willHeadshot}`;

    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Instructors</h1>
            <div className='row align-items-center justify-content-evenly mt-5'>
                <div className='col-lg-5 paragraph-col mb-3'>
                    <h1 className=''>FILIPE BARBOSA</h1>
                    <h4 className="text-muted">Owner, Head Instructor, 2nd Degree Black Belt</h4>
                    <div className='overflow-auto Overflow About-paragraph'>
                        <p className='paragraph about'>I’ve been involved with martial arts since my childhood. I started with Judo in Recife, Brazil, where I was born, and loved it! I learned this beautiful art of Judo with Professor Nagai, a legendary instructor and great inspirational leader! After that, I tried many different forms of martial arts… and found Karate: Kyokushin Oyama style, the most full contact form of Karate! I continued trying to find the perfect martial art, realizing there were many different styles and cultures to choose from. One day I watched the best Kyokushin brown belt from my gym get dominated and choked out by a man called “Coelho” (Rabbit). This man was a fighter; using a martial art with a very different approach that was unknown – to me at least!! JIU-JITSU!!! Intrigued, I finally began my training in what most consider the most effective and exciting form of self defense; known today as Brazilian Jiu-Jitsu! I initiated this training in Manaus, Brazil (The capitol of the Amazonas state) training with the Monteiro Brothers, under Royler Gracie. It immediately became my love and my passion! At that time I attended many international tournaments and seminars. This brought me to America where I started training Jiu-Jitsu with Luiz Claudio and Thiago Veiga. I’ve accomplished many goals as purple belt, brown belt, black belt, instructor, father and friend; with hopes of giving back to YOU by helping you achieve your goals through hard work and dedication.</p></div></div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={filipe} alt='filipe'></img>
                </div>
            </div>

            <div className='row align-items-center mt-5 justify-content-evenly'>
                <div className='col-lg-5 paragraph-col'>
                    <h1 className=''>CRISTIANO RIBEIRO</h1>
                    <h4 className="text-muted">Owner & Instructor of Gracie Barra - Madison</h4>
                    <h4 className="text-muted">4th Degree Black Belt</h4>
                    <p className='paragraph about'>Professor Riberio is a Brazilian Jiu-Jitsu instructor and Professional competitor from Manaus, Brazil. He is the Owner & Head Instructor of Gracie Barra - Madison, and represents Gracie Barra Founder, Master Carlos Gracie Jr. He continues to compete around the country and instructs regularly scheduled classes and privately.</p></div>
                <div className='col-lg-1'></div>

                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={cristiano} alt='cristiano'></img>
                </div>
            </div>

            <div className='row align-items-center mt-5 justify-content-evenly'>
                <div className='col-lg-5 paragraph-col'>
                    <h1 className=''>WILLIAM KEMP</h1>
                    <h4 className="text-muted">Instructor, Brown Belt</h4>
                    <p className='paragraph about'>I’ve been interested in all martial arts since a very young age, but never had the opportunity to properly train. Once I was old enough to afford my own classes, I began training everything and anything I could find. I found gym’s specializing in Karate, Jeet-Kune-Do, Escrima, etc. Doing my research, I found Brazilian Jiu-Jitsu to be the most complete of all martial-arts. Fortune smiled on me, as I was able to find Filipe Barbosa and his academy. Training Jiu-Jitsu was something I knew I wanted to do for life. I’ve been training Brazilian Jiu-Jitsu going on seven years, Muay-Thai, and some MMA for four years under Professor Barbosa. Brazilian Jiu-Jitsu has not only shaped the martial artist I practice to be, but also the man.</p></div>
                <div className='col-lg-1'></div>

                <div className='col-lg-5 mt-3 mt-lg-0'>
                    <img className='Home-img img-fluid' src={will} alt='will'></img>
                </div>
            </div>
        </div>
    )
}

export default About;