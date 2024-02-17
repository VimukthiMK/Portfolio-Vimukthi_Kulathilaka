import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import './Projects.css'

import proimg1 from '../../Assets/project 1.PNG'
import proimg2 from '../../Assets/project 2.PNG'
import proimg3 from '../../Assets/project 3.PNG'


export default function Projects() {
    return (
        <section id="projects">
            <p className="section-text-p1">Explore My</p>
            <h1 className="title">Projects</h1>
            <div className="container">
                <div className="work-list">
                    <div className="work">
                        <img src={proimg1} alt="Project 1" />
                        <div className="layer">
                            <h3>Phonez (Group)</h3>
                            <p>Phonez is a full stack e-commerce website with REST APIs.</p>
                            <a href="https://github.com/Kajaluxshan7/MobileShopApplication"><FontAwesomeIcon icon={faArrowUp} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={proimg2} alt="Project 2" />
                        <div className="layer">
                            <h3>DiaPredictor</h3>
                            <p>Machine Learning Project built in Python, utilizing SVM Classifier to predict Diabetes.</p>
                            <a href="https://github.com/VimukthiMK/DiaPredictor"><FontAwesomeIcon icon={faArrowUp} /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={proimg3} alt="Project 3" />
                        <div className="layer">
                            <h3>Map-Explore</h3>
                            <p>MERN stack Travel app that users can pin locations and Add their Reviews.</p>
                            <a href="https://github.com/VimukthiMK/Map-Explore"><FontAwesomeIcon icon={faArrowUp} /></a>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/VimukthiMK?tab=repositories" className="seebtn">See more</a>
            </div>
        </section>
    )
}
