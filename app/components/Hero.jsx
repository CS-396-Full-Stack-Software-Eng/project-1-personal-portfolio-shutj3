"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";


const Hero = () => {
    const {theme} = useTheme();
  return(
    <section className={`lg:py-16 ${
        theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-black'
      } min-h-screen` }>
        <div className="grid grid-cols-1 sm:grid-cols-12 py-40 px-40">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-indigo-400 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['ui-serif']">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"> 
                    Hi there! I'm{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Tianjie',
                            1000,
                            'Computer Science Student',
                            1000,
                            'Web Developer',
                            1000,
                            'Mobile Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-indigo-400 text-base sm:text-lg lg:text-xl mb-6 font-['Georgia'] text-justify">
                    With a deep love for computer science, I would like to share with you my journey of creation, realization and exploration in the field of computer science.
                </p>
                <div>
                    <button
                        className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400 text-indigo-500 hover:text-white"
                        >
                        <a href="https://www.linkedin.com/in/tianjie-shu-b12b05297"> Connect Me </a>
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400 bg-transparent text-white mt-3">
                        <a href="https://docs.google.com/document/d/1PadpXaq5PzOKBYed9cCEVA9UneU_Nxz60dAN1yFhIzk/edit?usp=sharing" className="block bg-indigo-300 rounded-full px-5 py-2 hover:bg-blue-200 ">Download Resume
                        </a> 
                    </button>
                    
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0 py-5">
                <div className="rounded-full bg-indigo-200 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                    <Image 
                        src="/images/avatar.png"
                        alt="Avatar Imgae"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
                
            </div>
            
        </div>
    </section>

  );
}

export default Hero;