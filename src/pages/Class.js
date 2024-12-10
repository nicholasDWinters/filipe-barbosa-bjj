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
                    <div style={{padding:"56.25% 0 0 0", position: "relative"}}><iframe src="https://player.vimeo.com/video/1038005843?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture;" style={{position: "absolute", top:0, left:0, width:"100%", height: "100%"}} title="Kids Class"></iframe></div>

                : ''}


            </div>
        </div>
    )
}

export default Class;