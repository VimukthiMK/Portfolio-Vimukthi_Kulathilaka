import React from 'react'
import { Link } from 'react-router-dom'
import'./Header.css'
import ToggleMenu from '../Togglemenu/Togglemenu'


export default function Header() {
  return (
    <>
    <nav id="desktop-nav">
      <div className="logo">Vimukthi</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
            
           
        </ul>
      </div>
    </nav>

    {/* Hamburger Navigation */}

    <nav id="hamburger-nav">
        <div className="logo">Vimukthi</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={ToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
          <li><a href="#about" onClick={ToggleMenu}>About</a></li>
          <li><a href="#experience" onClick={ToggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={ToggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={ToggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      </>
  )
}
