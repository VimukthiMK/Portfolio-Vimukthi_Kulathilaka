import React from 'react'
import './Contact.css'

import linkedinIcon from '../../Assets/linkedin.png';
import emailIcon from '../../Assets/email.png';



export default function Contact() {
  return (
    <section id="contact">
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
    </section>
  )
}
