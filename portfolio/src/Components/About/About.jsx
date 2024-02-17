import React from 'react'
import './About.css'
import aboutImage from '../../Assets/About-pic.jpg'
import expericenceIcon from '../../Assets/experience.png'
import eduIcon from '../../Assets/education.png'

const About = () => {
  
  return (
    <section id="about">
      <p className="section-text-p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section-pic-container">
          <img
            src={aboutImage}
            alt="Aboutpic"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={expericenceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Full-Stack Development <br />Data Science</p>
            </div>
            <div className="details-container">
              <img
                src={eduIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>Bsc(Hons)Software Engineering <br />2021-Present</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Welcome to my profile! I'm an enthusiastic and forward-looking undergraduate with a strong determination to succeed. Currently, I'm searching for an internship that can offer valuable experiences and help me expand my skill set, shaping my future career path. My main interests revolve around Data Science and Full Stack Development, where I'm captivated by the insights data can provide and the art of creating user-friendly web applications. These fields intrigue me due to their potential to revolutionize industries and generate innovative solutions.
            </p>
            <br />
            <p>
              Outside of my professional pursuits, I believe in leading a well-rounded life. I find happiness in exploring new places and experiencing diverse cultures through travel. Music isn't just a tune to me it's a way to express myself and find inspiration. I'm also an avid gamer, enjoying the blend of strategy and creativity in virtual worlds. Additionally, my curiosity about the fusion of technology and mobility is fueled by my fascination with automobiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
