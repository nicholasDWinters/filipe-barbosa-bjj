import React from 'react';
import '../App.css';
import './Classes.css';
import Form from '../Form';

const Class = ({ clss }) => {
    return (
        <div className='row align-items-center justify-content-evenly mt-5'>
            <div className='col-lg-5 paragraph-col'>
                <h1 className=''>{clss.type}</h1>
                <h5 className='paragraph text-muted about'>{clss.description}</h5></div>
            <div className='col-lg-5 mt-3 mt-lg-0'>
                {clss.isForm ? <div><h5 className='paragraph about text-muted'>Interested in trying jiu jitsu? Want to schedule a free trial class? Reach out to us to learn more.</h5><Form formType={'trial class'} /></div> : ''}
                {clss.imageURL ?

                    <img className='Classes-img img-fluid' src={clss.imageURL} alt={clss.title}></img> :
                    '' }
                {clss.videoURL ?
                    <video width="100%" controls>
                    <source src={clss.videoURL} type="video/mp4" />
                  
                  </video>
                : ''}


            </div>
        </div>
    )
}

export default Class;