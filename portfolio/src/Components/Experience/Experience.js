import React from 'react'


import checkMark from '../../Assets/checkmark.png'
import arrowIcon from '../../Assets/arrow.png';

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-text-p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        
        {/* First Container */}
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
              
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                
                <div>
                  <h3>Boostrap</h3>
                  <p>Basic</p>
                </div>
              </article>
              
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                
                <div>
                  <h3>SASS</h3>
                  <p>Basic</p>
                </div>
              </article>
              
            </div>

            <br />

            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>PHP</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Springboot</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            <article>
              <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>

          {/* Second Container */}
          <div className="details-container">
            <h2 className="experience-sub-title">Programming</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermdediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>C#</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>

            <br />

            <h2 className="experience-sub-title">Tools</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>GitHub</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Jira</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
            <br />
            
            <h2 className="experience-sub-title">Cloud</h2>
            <div className="article-container">
              <article>
                <img
                  src={checkMark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Amazon AWS</h3>
                  <p>Basic</p>
                </div>
              </article>
              
            </div>
          </div>

        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        classNameName="icon arrow"
        onClick={() => window.location.href = '#projects'}
      />
    </section>
  )
}
