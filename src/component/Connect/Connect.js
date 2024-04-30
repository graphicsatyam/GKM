import React, { useRef } from 'react';
import './Connect.css';
import emailjs from '@emailjs/browser';

function Connect() {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!')

    emailjs
      .sendForm('service_53mk3fh', 'template_sgddecg', form.current, {
        publicKey: 'n614InAh8TwE-ZmhB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <div>
      <h2 className='heading'> CONTACT US </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            name="user_name"
          />
        </div>
        <div>
          <label>Your E-mail:</label>
          <input
            type="email"
            name="user_email"
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="user_subject"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="user_message"
          ></textarea>
        </div>
        <div>
          <button type="submit" value="Send" >Submit</button>
        </div>
      </form>
      {/* <Location /> */}
    </div>


   
  );
}

export default Connect;
