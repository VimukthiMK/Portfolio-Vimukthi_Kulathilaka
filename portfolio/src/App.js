import React from 'react';

import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {

  return (
      <div className="App">
        <Header/>
        <Profile/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;