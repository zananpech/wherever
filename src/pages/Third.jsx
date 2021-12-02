import React from "react";
import FadeTextBox from "../components/FadeTextBox";
import "../styles/style.css";
import { viewTrackingHandler } from "../helpers/Helpers";

function Third() {
  return (
    <div
      onMouseEnter={() => viewTrackingHandler("third-view")}
      class="rounded-lg flex lg:flex-row flex-col justify-center items-center lg:h-screen bg-green-400 p-5"
    >
      <div class="mb-5">
        <img class="h-32 w-32 mx-auto" src={require("../assets/camera.svg")} />
        <FadeTextBox title={"Easily add new snapshot"} />
      </div>
      <div class="mb-5">
        <img class="h-32 w-32 mx-auto" src={require("../assets/like.svg")} />
        <FadeTextBox title={"React to highlight from your team"} />
      </div>
      <div class="mb-5">
        <img class="h-32 w-32 mx-auto" src={require("../assets/fill.svg")} />
        <FadeTextBox title={"Fill out missing logs if you have to"} />
      </div>
      <div class="mb-5">
        <img class="h-32 w-32 mx-auto" src={require("../assets/update.svg")} />
        <FadeTextBox title={"Track your team progress in real time"} />
      </div>
    </div>
  );
}

export default Third;
