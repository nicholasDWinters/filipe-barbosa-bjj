import React from 'react';
import GalleryImg from './GalleryImg';
import gallery1 from '../images/gallery1.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery3 from '../images/gallery3.jpg';
import gallery4 from '../images/gallery4.jpg';
import gallery5 from '../images/gallery5.jpg';
import gallery6 from '../images/gallery6.jpg';
import gallery7 from '../images/gallery7.jpg';
import gallery8 from '../images/gallery8.jpg';
import gallery9 from '../images/gallery9.jpg';
import gallery10 from '../images/gallery10.jpg';
import gallery11 from '../images/gallery11.jpg';
import gallery12 from '../images/gallery12.jpg';

const Gallery = () => {

    const video2 = { 'url': 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F433771384714547%2F&show_text=false&width=560&t=0', 'height': 314 }

    const video3 = { 'url': 'https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F169960754549410%2F&show_text=false&width=560&t=0', 'height': 420 }

    
    const urls = [`${gallery1}`, `${gallery12}`, `${gallery3}`, `${gallery4}`, video2, `${gallery5}`, `${gallery6}`, `${gallery2}`, `${gallery7}`, `${gallery8}`, video3, `${gallery9}`, `${gallery10}`, `${gallery11}`];

    return (
        <div className='container mt-3'>
            <div className='row align-items-center justify-content-evenly'>

            <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/898205556?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} title="Jiu Jitsu Class"></iframe></div>
                {urls.map(url => <GalleryImg url={url} key={urls.indexOf(url)} />)}
            </div>
        </div>
    )
}

export default Gallery;
