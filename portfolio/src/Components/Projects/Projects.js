import React from 'react'

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-text-p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project 1.PNG"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Phonez (Group)</h2>
            <p>Phonez is a full stack e-commerce website with REST APIs.</p>
            <br />
            <div className="btn-container">
              <button
                className="btn project-btn"
                onClick={() => window.location.href = 'https://github.com/Kajaluxshan7/MobileShopApplication'}
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project 2.PNG"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">DiaPredictor</h2>
            <p>Machine Learning Project built in Python, utilizing SVM Classifier to predict Diabetes.</p>
            <br />
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/VimukthiMK/DiaPredictor'}
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project 3.PNG"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Portfolio </h2>
            <p>A simple resume webpage with responsiveness.</p>
            <br />
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/VimukthiMK/Portfolio-Vimukthi_Kulathilaka'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://vimukthimk.github.io/Portfolio-Vimukthi_Kulathilaka/'}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = '#contact'}
      />
    </section>
  )
}
