"use client";

import React from "react";
import { ovo } from "../layout";
import Footer from './Footer'

const Work = () => {
  
  return (
  <div id="work">
    <div className="min-h-screen flex flex-col">
      <div>
        <h1 className={`sm:text[18px] md:text[18px] lg:text-[30px] font-bold ${ovo.className}`}
         style={{ marginLeft: '2rem' }}>
          My Portfolio
        </h1>
      
        <h2 className={`sm:text[18px] md:text[18px] lg:text-[30px] text-center font-bold ${ovo.className}`}
         style={{ marginTop: '3rem' }}>My work</h2>
        <p className={`sm:text[18px] md:text[18px] lg:text-[30px] text-center ${ovo.className}`}
        style={{ marginRight: '1rem', marginLeft: '2rem' }}>
          I have worked on several projects, including personal and collaborative ones.
          My portfolio showcases my skills in front-end development, with a focus on creating
          responsive and user-friendly interfaces. I am always eager to learn and take on new challenges.
          I am currently looking for opportunities to work on exciting projects and expand my skill set.
        </p>
      </div>
      
    </div>
  </div>
  );
};

export default Work;
