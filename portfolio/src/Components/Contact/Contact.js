import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import linkedinIcon from '../../Assets/linkedin.png';
import emailIcon from '../../Assets/email.png';

import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobNumber, setMobNumber] = useState('');
  const [message, setMessage] = useState('');

  const service_id = 'service_ipc6bvi';
  const template_id = 'template_wmby2mt';
  const public_key = 'DSbVcgm40HNkZSh7n';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,  
      mobNumber,
      message
    };

    try {
      const response = await emailjs.sendForm(service_id, template_id, templateParams, public_key);

      console.log('SUCCESS!', response.status, response.text);
      toast.success('Your response is submitted!', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.error('FAILED...', error);
      toast.error('Failed to submit the form. Please try again later.', { position: toast.POSITION.TOP_CENTER });
    }


    // Reset form fields
    setName('');
    setEmail('');
    setMobNumber('');
    setMessage('');
  };

  return (
    <section id="contact">
      <ToastContainer />
      <p className="section-text-p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:vimukthikulathilaka@gmail.com">vimukthikulathilaka@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/vimukthi-kulathilaka-76bb39229">vimukthi Kulathilaka</a></p>
        </div>
      </div>
      <div className='form_container'>
        <form className="form-contact" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            id="email"
            required
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="number"
            id="mob-number"
            placeholder="Your Mobile No"
            value={mobNumber}
            onChange={(e) => setMobNumber(e.target.value)}
          />

          <textarea
            id="message"
            rows="5"
            required
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="form-btn">
            <button id="submit" type="submit">Send Message</button>
          </div>
        </form> 
      </div>
    </section>
  );
};

export default Contact;