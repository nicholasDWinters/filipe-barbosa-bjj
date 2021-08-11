import React from 'react';
import './GalleryImg.css';

const GalleryImg = ({ url }) => {
    return (
        <>
            {
                url.startsWith('https://www.facebook') ?
                    <div className='col-lg-6 mt-3'>
                        <iframe title='grappling video' src={url} width="100%" height="315" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" loading='lazy'></iframe>
                    </div>
                    :
                    <div className='col-lg-4 mt-3'>
                        <img className='Gallery-img img-fluid' src={url} alt='gallery pic' loading='lazy'></img>
                    </div>
            }
        </>
    )
}

export default GalleryImg;