import React from 'react';
import '../App.css';
import './Schedule.css';

const Schedule = () => {
    return (
        <div className='container'>
            <h1 className='mt-4 display-3'>Schedule</h1>
            <div className='container'>
                <div className='row mt-4 justify-content-evenly align-items-center'>

                    <div className='col-lg-6 paragraph-col ps-lg-5 ps-3'>
                        <h1 className='mt-3 day'>MONDAY</h1>

                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span d-block d-sm-inline'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span d-block d-sm-inline'>Kid - Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>NOGI BJJ Fundamentals</span></h4>
                        <h4 className='Schedule-paragraph text-muted mb-3'>7PM - 8PM <span className='ms-4 Schedule-span d-block d-sm-inline'>NOGI BJJ Advanced</span></h4>

                        <h1 className='mt-5 day'>TUESDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Fundamentals</span></h4>
                        <h4 className='Schedule-paragraph text-muted mb-3'>7PM - 8PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Advanced</span></h4>

                        <h1 className='mt-5 day'>WEDNESDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span d-block d-sm-inline'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span d-block d-sm-inline'>Kid - Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>NOGI BJJ Fundamentals</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>7PM - 8PM <span className='ms-4 Schedule-span d-block d-sm-inline'>MMA</span></h4>

                    </div>

                    <div className='col-lg-6 paragraph-col ps-lg-5'>
                        <h1 className='mt-5 day'>THURSDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Fundamentals</span></h4>

                        <h4 className='Schedule-paragraph text-muted'>7PM - 8PM <span className='ms-4 Schedule-span d-block d-sm-inline'>GI BJJ Advanced</span></h4>

                        <h1 className='mt-5 day'>FRIDAY</h1>
                        <h4 className='Schedule-paragraph text-muted'>6AM - 7AM <span className='ms-4 Schedule-span d-block d-sm-inline'>Women's Kickboxing</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>5PM - 6PM <span className='ms-4 Schedule-span d-block d-sm-inline'>Kid - Jitsu</span></h4>
                        <h4 className='Schedule-paragraph text-muted'>6PM - 7PM <span className='ms-4 Schedule-span d-block d-sm-inline'>MMA</span></h4>

                        {/* <img className='Classes-img img-fluid' src='' alt=''></img> */}
                    </div>

                </div >
            </div>

        </div >
    )
}

export default Schedule;