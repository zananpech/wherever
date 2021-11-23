import React from 'react'
import {Animated} from "react-animated-css";
function Feature(){
    return (
    <Animated>
            <div class="grid lg:grid-cols-3 gap-4 w-screen h-screen m-10">
                <div class="upLeft">
                <img src={require("./header.jpg")} class="w-30 h-30" alt=""/>
                <h3 class="text-3xl">You do you</h3>
                <p class="text">You are in control , Log only what you want , when you want</p>
            </div>
            <div class="upMiddle">
                <img src={require("./header.jpg")} class="w-30 h-30" alt=""/>
                <h3 class="text-3xl">1 picture {'>'} 1000 words</h3>
                <p class="text">Instead of describing what you are doing , just show it</p>
            </div>
            <div class="upRight">
                <img src={require("./header.jpg")} class="w-30 h-30" alt=""/>
                <h3 class="text-3xl">Team spirit</h3>
                <p class="text">See what others in your team are working on</p>
            </div>
        
            <div class="downLeft">
                <img src={require("./header.jpg")} class="w-30 h-30" alt=""/>
                <h3 class="text-3xl">Show off</h3>
                <p class="text">Do you think your work is superb? Of course it is. Let others know what you are proud of.</p>
            </div>
            <div class="downMiddle">
                <img src={require("./header.jpg")} class="w-30 h-30" alt=""/>
                <h3 class="text-3xl">Nothing to install</h3>
                <p class="text">Web based, accessible anytime, anywhere.</p>
            </div>
            <div class="downRight">
                <img src={require("./header.jpg")} class="w-30 h-30" alt=""/>
                <h3 class="text-3xl">Timeline</h3>
                <p class="text">See your productivity as it progress the day</p>
            </div>      
        </div>

    </Animated>
    
    )
}

export default Feature;