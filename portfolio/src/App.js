import React from 'react'
import "./app.css";

import Header from './Components/Header'
import Profile from './Components/Profile'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
       <div className="App font-outfit">
      <Header />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App