import React from 'react'

export default function Profile() {

  const openResume = () => {
    window.open('./assets/resume-example.pdf');
    }

    const redirectToContact = () => {
      window.location.href = '/contact'; // Updated to '/contact'
    }
  return (
    <section id="profile">
      <div className="section-pic-container">
        <img src="" alt="profile picture" className="prof_img" />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">Vimukthi Kulathilaka</h1>
        <p className="section-text-p2">And I'm a Software Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={redirectToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src=""
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => {
              window.location.href = 'https://www.linkedin.com/in/vimukthi-kulathilaka-76bb39229';
            }}
          />
          <img
            src=""
            alt="My Github profile"
            className="icon"
            onClick={() => {
              window.location.href = 'https://github.com/VimukthiMK';
            }}
          />
          <img
            src=""
            alt="My Medium profile"
            className="icon"
            onClick={() => {
              window.location.href = 'https://medium.com/@vimukthikulathilaka';
            }}
          />
        </div>
      </div>
    </section>
  )
}
