import React, {lazy,Suspense} from 'react'

import Header from './Components/Header/Header'
const Profile = lazy(() => import('./Components/Profile/Profile'))
const About = lazy(() => import('./Components/About/About'))
const Experience = lazy(() => import('./Components/Experience/Experience'))
const Projects = lazy(() => import('./Components/Projects/Projects'))
const Contact = lazy(() => import('./Components/Contact/Contact'))
const Footer = lazy(() => import('./Components/Footer/Footer'))
function App() {

  return (
      <div className="App">
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
        <Profile/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
        </Suspense>
      </div>
  )
}

export default App