import React from 'react';

const Reason = ({ reason }) => {
    return (
        <div>
            <h2 className=''>{reason.reason}</h2>
            <h5 className='text-muted mb-4 about paragraph'>{reason.description}</h5>

        </div>
    );
}

export default Reason;