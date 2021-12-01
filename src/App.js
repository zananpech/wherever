import Feature from './pages/Feature.jsx';
import Third from './pages/Third.jsx'
import Contact from './pages/Contact.jsx'
import React, { useEffect } from 'react';
import ReactGa from 'react-ga';
import { Animated } from "react-animated-css";


function App() {

  function clickHandler() {
    ReactGa.event({
      category: 'click',
      action: 'click Im interested Button'
    })
    alert('Send information to googly analytics.')
  }

  useEffect(() => {
    ReactGa.initialize('UA-179333339-1');
    ReactGa.pageview('/landing_page');
  })
  return (
    <div>
      <div class="lg:flex m-5 h-screen">
        <div class="md:w-screen lg:w-1/2 md:h-1/2 lg:h-screen lg:flex items-center">
          <img class="mx-auto lg:h-3/4 lg:w-3/4" src={require("./assets/progess.svg")} />
        </div>
        <div class="flex flex-col justify-center items-center lg:items-start">
          <Animated animationIn="slideInUp">
            <h1 class="font-semibold lg:text-5xl text-3xl lg:text-left text-center mb-3">
              Track progress <br />
              instead of Time
            </h1>
          </Animated>
          <Animated animationInDelay="800">
            <p class="md:text-2xl text-lg text-center">
              Track what get's done in an easy understand <br />
              <span>virtual way and share your work in real time</span>
            </p>
          </Animated>
          <button onClick={clickHandler} class="font-bold text-lg mt-10 transition-all bg-purple-500 hover:bg-purple-800 rounded-lg p-3 text-white w-40 items-center">
            I'm interested
          </button>
        </div>
      </div>
      {/* second */}
      <Feature />
      <Third />
      <Contact />
    </div>
  );
}

export default App;
