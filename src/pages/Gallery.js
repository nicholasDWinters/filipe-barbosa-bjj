import React from 'react';
import GalleryImg from './GalleryImg';
import willLotus from '../images/willLotus.jpg';
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

const Gallery = () => {
    const urls = [`${gallery1}`, 'https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F4173779185998536%2F&show_text=false&width=560&t=0', `${gallery2}`, `${gallery3}`, `${gallery4}`, 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F433771384714547%2F&show_text=false&width=560&t=0', `${gallery5}`, `${gallery6}`, `${willLotus}`, `${gallery7}`, `${gallery8}`, 'https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F190576607652167%2Fvideos%2F169960754549410%2F&show_text=false&width=560&t=0', `${gallery9}`, `${gallery10}`, `${gallery11}`];
    return (
        <div className='container mt-3'>
            <div className='row align-items-center justify-content-evenly'>

                {urls.map(url => <GalleryImg url={url} key={url} />)}
            </div>
        </div>
    )
}

export default Gallery;
