import React from "react";
import { Component } from "react";
import { Animated } from "react-animated-css";
import { viewTrackingHandler } from "../helpers/Helpers";
class Feature extends Component {
  render() {
    return (
      <Animated>
        <div
          onMouseEnter={() => viewTrackingHandler("second-view")}
          class="md:grid md:grid-cols-3 gap-4 mx-auto"
        >
          <div class="m-5">
            <img
              src={require("../assets/clock.svg")}
              class="mx-auto w-1/2 h-1/2"
            />
            <h3 class="text-center text-3xl">You do you</h3>
            <p class="text-center">
              You are in control , Log only what you want , when you want
            </p>
          </div>
          <div class="m-5">
            <img
              src={require("../assets/pictures.png")}
              class="mx-auto w-1/2 h-1/2"
              alt=""
            />
            <h3 class="text-center text-3xl">1 picture {">"} 1000 words</h3>
            <p class="text-center">
              Instead of describing what you are doing , just show it
            </p>
          </div>
          <div class="m-5">
            <img
              src={require("../assets/team.png")}
              class="mx-auto w-1/2 h-1/2"
              alt=""
            />
            <h3 class="text-center text-3xl">Team spirit</h3>
            <p class="text-center">
              See what others in your team are working on
            </p>
          </div>
          <div class="m-5">
            <img
              src={require("../assets/marketing.png")}
              class="mx-auto w-1/2 h-1/2"
              alt=""
            />
            <h3 class="text-center text-3xl">Show off</h3>
            <p class="text-center">
              Do you think your work is superb? Of course it is. Let others know
              what you are proud of.
            </p>
          </div>
          <div class="m-5">
            <img
              src={require("../assets/web-design.png")}
              class="mx-auto w-1/2 h-1/2"
              alt=""
            />
            <h3 class="text-center text-3xl">Nothing to install</h3>
            <p class="text-center">Web based, accessible anytime, anywhere.</p>
          </div>
          <div class="m-5">
            <img
              src={require("../assets/timeline.png")}
              class="mx-auto w-1/2 h-1/2"
              alt=""
            />
            <h3 class="text-center text-3xl">Timeline</h3>
            <p class="text-center">
              See your productivity as it progress the day
            </p>
          </div>
        </div>
      </Animated>
    );
  }
}

export default Feature;
