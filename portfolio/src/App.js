import React from "react";
import "./app.css";
import { ToastContainer } from "react-toastify";

import Header from "./Components/Header";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import LenisScroll from "./Components/LenisScroll";
import SocialMedia from "./Components/SocialMedia";

function App() {
  return (
    <div className="App font-outfit">
      <LenisScroll />
      <Header />
      <Profile />
      <About />
      <Services />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />

        {/* Fixed Social Icons */}
      <SocialMedia />

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
