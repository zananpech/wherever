import React, { useState } from 'react'
import FadeTextBox from '../components/FadeTextBox'
import { Animated } from "react-animated-css";
import '../styles/style.css'

function Contact() {

    return (
        <div class="container md:flex justify-center items-center h-screen w-screen mt-5">
            <div class="mx-16">
                <Animated animationIn="slideInUp">
                    <p class="font-semibold lg:text-5xl text-4xl mb-5">Notify Me</p>
                </Animated>
                <Animated animationInDelay="800">
                    <p class="lg:text-2xl text-xl">
                        We are not ready to fully roll out <br /> wherever company, but sign up and we'll <br /> keep you posted.
                    </p>
                </Animated>
                <Animated animationInDelay="800">
                    <form class="mt-8 flex">
                        <input class="rounded-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
                    </form>
                </Animated>
                <button class="font-bold transition-all text-lg mt-8 bg-green-500 hover:bg-blue-700 rounded-lg p-3 text-white flex items-center justify-center">
                    Keep me posted!
                </button>
            </div>
            <div class="lg:w-1/2 lg:h-3/5 mt-26">
                <img class="mx-auto lg:w-max lg:h-max" src={require("../assets/notify.gif")} />
            </div>
        </div>
    )

}

export default Contact;