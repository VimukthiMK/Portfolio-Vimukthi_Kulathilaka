import React from 'react'
import { Link } from 'react-router-dom'
import'../CSS/style.css'

export default function Header() {
  return (
    <><nav id="desktop-nav">
      <div className="logo">Vimukthi</div>
      <div>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>

    {/* Hamburger Navigation */}
    
    <nav id="hamburger-nav">
      <div class="logo">Vimukthi</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>
      </>
  )
}
