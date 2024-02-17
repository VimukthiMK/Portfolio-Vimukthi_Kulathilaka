import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ContactForm from './ContactForm'
import linkedinIcon from '../../Assets/linkedin.png'
import emailIcon from '../../Assets/email.png'
import './Contact.css'

const Contact = () => {

  return (
    <section id="contact">
      {/* Display toast messages */}
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

      {/* contact form */}
      <ContactForm />
    </section>
  )
}

export default Contact