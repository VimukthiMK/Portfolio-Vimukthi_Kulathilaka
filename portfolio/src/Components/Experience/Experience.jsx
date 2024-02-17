import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faScrewdriverWrench, faArrowRight } from '@fortawesome/free-solid-svg-icons'// Font-awesome icons

import './Experience.css'

const Experience = () => {
  
  return (
    <section id="experience">
      <p className="section-text-p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div class="container">
        <div class="experience-list">
          <div>
            <FontAwesomeIcon icon={faCode} size="2x" color='white' />
            <h2>Programming</h2>
            <ul>
              <li><p> C</p><progress id="progressBar" value="85" max="100"></progress></li>
              <li><p>Java</p><progress id="progressBar" value="80" max="100"></progress></li>
              <li><p>PHP</p><progress id="progressBar" value="70" max="100"></progress></li>
              <li><p>C#</p><progress id="progressBar" value="50" max="100"></progress></li>
              <li><p>JavaScript</p><progress id="progressBar" value="76" max="100"></progress></li>
              <li><p>Python</p><progress id="progressBar" value="70" max="100"></progress></li>

            </ul>
          </div>
          <div>
            <FontAwesomeIcon icon={faCode} size="2x" color='white' />
            <h2>Library & Framework</h2>
            <ul>
              <li><p>ReactJs</p><progress id="progressBar" value="85" max="100"></progress></li>
              <li><p>Spring Boot</p><progress id="progressBar" value="75" max="100"></progress></li>
              <li><p>NodeJS</p><progress id="progressBar" value="60" max="100"></progress></li>
              <li><p>Express</p><progress id="progressBar" value="60" max="100"></progress></li>
              <li><p>MySQL</p><progress id="progressBar" value="85" max="100"></progress></li>
              <li><p>MongoDB</p><progress id="progressBar" value="60" max="100"></progress></li>
            </ul>
          </div>
          <div>
            <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" color='white' />
            <h2>Tools</h2>
            <ul>
              <li><p><FontAwesomeIcon icon={faArrowRight} /> Github</p></li>
              <li><p><FontAwesomeIcon icon={faArrowRight} /> Jira</p></li>
              <li><p><FontAwesomeIcon icon={faArrowRight} /> PowerBI</p></li>
              <li><p><FontAwesomeIcon icon={faArrowRight} /> VirtualBox</p></li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience