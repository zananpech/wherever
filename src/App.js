import Feature from "./pages/Feature";
import Third from "./pages/Third";
import Contact from "./pages/Contact";
import React, { Component } from "react";
import ReactGa from "react-ga";
import { Animated } from "react-animated-css";
import { viewTrackingHandler } from "./helpers/Helpers";

ReactGa.initialize("UA-179333339-1");

class App extends Component {
  clickHandler = () => {
    ReactGa.event({
      category: "click",
      action: "click Im interested Button",
    });
    alert("Send information to googly analytics.");
  };

  render() {
    return (
      <div onMouseEnter={this.initializeGoogleAnalytics}>
        <div
          onMouseEnter={() => viewTrackingHandler("first-view")}
          className="lg:flex m-5 h-screen"
        >
          <div className="md:w-screen lg:w-1/2 md:h-1/2 lg:h-screen lg:flex items-center">
            <img
              className="mx-auto lg:h-3/4 lg:w-3/4"
              src={require("./assets/progess.svg")}
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start">
            <Animated animationIn="slideInUp">
              <h1 className="font-semibold lg:text-5xl text-3xl lg:text-left text-center mb-3">
                Track progress <br />
                instead of Time
              </h1>
            </Animated>
            <Animated animationInDelay="800">
              <p className="md:text-2xl text-lg text-center">
                Track what get's done in an easy understand <br />
                <span>virtual way and share your work in real time</span>
              </p>
            </Animated>
            <button
              onClick={this.clickHandler}
              className="font-bold text-lg mt-10 transition-all bg-purple-500 hover:bg-purple-800 rounded-lg p-3 text-white w-40 items-center"
            >
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
}
export default App;
