import Feature from './pages/Feature.jsx';
import React, {useEffect} from 'react';
import ReactGa from 'react-ga';
import {Animated} from "react-animated-css";


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
    ReactGa.pageview('/');
  })
  return ( 
    <div>
        <div class="container md:flex justify-center items-center h-screen w-screen">
      <div class="container filter drop-shadow-lg bg-purple-200 rounded-lg border-2 h-1/2 md:w-1/2 w-screen mb-10">
      </div>
      <div class="mx-16">
        <Animated animationIn="slideInUp">
            <p class="font-semibold lg:text-5xl text-4xl mb-5">
              Track progress <br />
              instead of Time
            </p>
        </Animated>
        <Animated animationInDelay="800">
          <p class="lg:text-2xl text-xl">
            Track what get's done in an easy understand <br/>
            virtual way and share your work in real time
          </p>
        </Animated>
        <button onClick={clickHandler} class="font-bold text-lg mt-10 bg-purple-600 hover:bg-purple-700 rounded-lg p-3 text-white flex items-center justify-center">
                I'm interested
        </button>
      </div>     
    </div>
      <Feature/>
    </div>
    
    
  );
}

export default App;
