import React, {useEffect, useState} from 'react';
import { send } from 'emailjs-com';

const Form = ({ formType }) => {
  const [toSend, setToSend] = useState({
    from_name: '',
    phone_number: '',
    message: '',
    reply_to: '',
    form_type: formType,
});

const [showAlert, setShowAlert] = useState('alert alert-primary fade show d-none');
const [showButton, setShowButton] = useState('btn btn-primary d-block');

const onSubmit = async (e) => {
  e.preventDefault();
  try {
        await send('service_j39w2zg',
            'contact_form',
            toSend,
            'KvatJ9TH5ve9y7vMI');
        setToSend({
          from_name: '',
          message: '',
          reply_to: '',
          phone_number: '',
        });
        setShowAlert('alert alert-primary fade show d-block');
        setShowButton('btn btn-primary d-none');
      } catch (err) {
        console.log('failed', err);
      } 
    };
    
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    useEffect(() => {
    console.log(showAlert, showButton);
    }, [showAlert, showButton]);
    return (
      <form onSubmit={onSubmit} className='mt-3 mb-5'>
      <input className='form-control mb-3'
          type='text'
          name='from_name'
          placeholder='Name'
          value={toSend.from_name}
          onChange={handleChange}
      />
      <input className='form-control mb-3'
          type='email'
          name='reply_to'
          placeholder='Email'
          value={toSend.reply_to}
          onChange={handleChange}
      />
      <input className='form-control mb-3'
          type='text'
          name='phone_number'
          placeholder='Phone Number'
          value={toSend.phone_number}
          onChange={handleChange}
      />
      {formType === 'seminar' ?
      
      <textarea className='form-control mb-3'
          type='text'
          rows='3'
          name='message'
          placeholder='Message'
          value={toSend.message}
          onChange={handleChange}
      /> : ''
      }
      <div className='d-grid'>
<button className={showButton} type='submit'>Submit</button>
<div className={showAlert} role="alert">
 <strong>Message Sent!</strong> We will get back to you soon.
</div>

      </div>
  </form>
    );
}

export default Form;