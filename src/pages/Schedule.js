import React from 'react';
import '../App.css';
import './Schedule.css';

const Schedule = () => {
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Schedule</h1>
            <div className='container'>
                <div className='row mt-4 justify-content-center align-items-center'>

                    <div className='col-lg-6 paragraph-col ps-5'>
                        <h1 className='mt-3'>MONDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span'>Kid Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span'>GI BJJ Fundamentals</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>7PM - 8PM <span className='ms-4 Schedule-span'>NOGI Jiu Jitsu</span></h4>

                        <h1 className='mt-5'>TUESDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span'>GI BJJ Fundamentals</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>7PM - 8PM <span className='ms-4 Schedule-span'>GI BJJ Advanced</span></h4>
                        <h1 className='mt-5'>WEDNESDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span'>Kid Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span'>NOGI Jiu Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>7PM - 8PM <span className='ms-4 Schedule-span'>MMA</span></h4>

                    </div>

                    <div className='col-lg-6 paragraph-col ps-5'>
                        <h1 className='mt-5'>THURSDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span'>GI BJJ Fundamentals</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>7PM - 8PM <span className='ms-4 Schedule-span'>GI BJJ Advanced</span></h4>
                        <h1 className='mt-5'>FRIDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span'>Kid Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span'>MMA</span></h4>

                        {/* <img className='Classes-img img-fluid' src='' alt=''></img> */}
                    </div>

                </div >
            </div>

        </div >
    )
}

export default Schedule;