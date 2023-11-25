import React, { useEffect } from 'react';
import profileImage from '../../Assets/Vimukthi.png';
import linkedinIcon from '../../Assets/linkedin.png';
import githubIcon from '../../Assets/github.png';
import mediumIcon from '../../Assets/medium.png';
import './Profile.css'

const Profile = () => {
  const downloadCV = () => {
    const resumeUrl = '../Assets/Vimukthi-kulathilaka-CV.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vimukthi-kulathilaka-CV.pdf';

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger a click on Anchor
    link.click();

    // Remove the anchor 
    document.body.removeChild(link);
  };

  // Text animation
  
  useEffect(() => {
    const textElement = document.getElementById('section-text-p2');
    const textToType = "And I'm a Software Developer";
    let index = 0;

    function typeAndErase() {
      const currentText = textElement.innerText;
      const speed = 100; // Animation speed
      const pauseTime = 1000; // Pause time

      if (index <= textToType.length) {
        textElement.innerText = textToType.slice(0, index);
        index++;
      } else {
        index = 0;
        setTimeout(typeAndErase, pauseTime);
        return;
      }

      setTimeout(typeAndErase, speed);
    }

    // Start the typing and erasing animation
    typeAndErase();
  }, []);

  return (
    <>
    <section id="profile">
      <div className="section-pic-container">
      <img
            src={profileImage}
            alt="profile picture"
            className="prof_img"
      />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">Vimukthi Kulathilaka</h1>
        <div className='Animate_text-container'>
        <p className="section-text-p2" id="section-text-p2" >And I'm a Software Developer</p>
        </div>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={downloadCV}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href = '.#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href = 'https://www.linkedin.com/in/vimukthi-kulathilaka-76bb39229'}
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href = 'https://github.com/VimukthiMK'}
          />
          <img
            src={mediumIcon}
            alt="My Medium profile"
            className="icon"
            onClick={() => window.location.href = 'https://medium.com/@vimukthikulathilaka'}
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Profile;
