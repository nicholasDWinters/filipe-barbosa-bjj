import React from 'react';
import '../App.css';
import './Classes.css';

const Class = ({ clss }) => {
    return (
        <div className='row align-items-center mt-5'>
            <div className='col-lg-1'></div>
            <div className='col-lg-4 paragraph-col'>
                <h1 className=''>{clss.type}</h1>
                <h5 className='paragraph text-muted about'>{clss.description}</h5></div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5 mt-3 mt-lg-0'>
                {clss.imageURL ?

                    <img className='Classes-img img-fluid' src={clss.imageURL} alt={clss.title}></img> :

                    <iframe className='pt-5' title={clss.title} src={clss.videoURL} width="100%" height={clss.videoHeight} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                }


            </div>
            <div className='col-lg-1'></div>
        </div>
    )
}

export default Class;