import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <p className="section-text-p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:vimukthikulathilaka@gmail.com">vimukthikulathilaka@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/vimukthi-kulathilaka-76bb39229">vimukthi Kulathilaka</a></p>
        </div>
      </div>
    </section>
  )
}
