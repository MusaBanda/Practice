'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import assets, { infoList, toolsData } from '@/assets/assets';
import { ovo } from "../layout";
import Footer from './Footer';

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredToolIndex, setHoveredToolIndex] = useState(null);

    // show or hide menu based on screen size
const [showForLargeScreen, setShowForLargeScreen] = useState(false);
const [showForSmallScreen, setShowForSmallScreen] = useState(false);
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  const handleResize = () => {
    const isLarge = window.innerWidth >= 1024;
    setShowForLargeScreen(isLarge);
    setShowForSmallScreen(!isLarge);
  };

  setIsClient(true); 
  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
<div  id='about'>
  {showForLargeScreen &&<div  className={`px-5 py-4 items-center justify-center min-h-screen   text-[white] ${ovo.className}`}>

    <div className="mb-10 text-center">
        <h4 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${ovo.className}`}>Introduction</h4>
        <h2 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${ovo.className}`}>About Me</h2>
    </div>
    
    <div className="-mx-[0px] -my-[1px] w-full flex">
          <div className="w-64 sm:w-80 mb-10">
            <Image
             src={assets.about_pic} alt="" className="rounded-3xl" width={300} height={450}
             style={{borderRadius: '1.5rem', marginTop: '2rem'}}/>
          </div>
    
        <div className="flex flex-col">
            <p className={`sm:text-[18px] md:text-[25px] lg:text-[40px] text-justify ${ovo.className}`}
              style={{marginRight:'2rem', marginLeft:'2rem', color: 'white'}}>
              I'm a front-end web developer from South Africa, skilled in HTML, CSS, JavaScript, and React.
              I create clean, responsive websites, focusing on both function and design. I enjoy building interactive
              digital experiences that people love using.
            </p>

          <ul className="flex gap-6 overflow-x-auto list-none p-0 m-0 mb-10" 
             style={{gap: "1rem", marginTop: "2.5rem", marginBottom: "2.5rem", background: 'see-through',}}>

             {infoList.map(({ icon, title, description }, index) => {
             const isHovered = hoveredIndex === index;
          return (
            <li key={index} className="flex-shrink-0 cursor-pointer"
              
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}

              style={{ minWidth: '200px', padding: '1rem', border: '1px solid #ccc', borderRadius: '2rem',
                 backgroundColor: isHovered ? '#ebf8ff' : 'transparent',
                boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                transform: isHovered ? 'translateY(-5px)' : 'none',
                transition: 'all 0.3s ease',
              }} >

            <div className="flex flex-col items-center" >
                <Image src={icon} alt={title} width={30} className="mb-2" />
                <h3 className="sm:text-[11px] md:text-[18px] lg:text-[20px] text-gray-700">{title}</h3>
                <p className="sm:text-[11px] md:text-[18px] lg:text-[20px] text-gray-600">{description}</p>
            </div>
            </li>  ); })} 
          </ul>

            <h3 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${ovo.className}`} 
            style={{marginLeft: '2rem'}}>Tools I Use</h3>

          <ul className="flex items-center justify-center flex-wrap gap-6 mb-16">
                  {toolsData.map((tool, index) => {
                  const isHovered = hoveredToolIndex === index;
          return (
            <li key={index} className="flex rounded-full cursor-pointer"
             
              onMouseEnter={() => setHoveredToolIndex(index)}
              onMouseLeave={() => setHoveredToolIndex(null)}
             
              style={{ padding: '1rem', border: '5px solid #ccc',transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-5px)' : 'none', 
                boxShadow: isHovered ? '0 4px 10px rgba(0,0,0,0.1)' : 'none',
                marginRight: '5rem', marginLeft:'1rem', marginTop: '2rem',
              }}>
              <Image src={tool} alt="tool" width={30} />
            </li>  );     })}
          </ul>
      </div>
  </div>
      
    
  </div>}

  {showForSmallScreen &&<div className=' min-h-screen text-[white]'>
         <div className='text-center'>
          <h4 className="sm:text-[18px] md:text-[20px] lg:text-[30px]">Introduction</h4>
          <h2 className="sm:text-[18px] md:text-[20px] lg:text-[30px]">About Me</h2>
        </div>

         <div className='flex flex-col items-center justify-center text-center'>
          <Image src={assets.about_pic} alt="" className="rounded-3xl" width={250} height={400}
            style={{ borderRadius: '1.5rem' }}
          />
        </div>

        <p
          className={`sm:text-[18px] md:text-[25px] lg:text-[40px] text-center  text-justify ${ovo.className}`}
          style={{ marginRight: '2rem', marginLeft: '2rem' }}>
          I'm a front-end web developer from South Africa, skilled in HTML, CSS, JavaScript, and React.
          I create clean, responsive websites, focusing on both function and design. I enjoy building interactive
          digital experiences that people love using.
        </p>

         <ul
         className="flex gap-6 overflow-x-auto list-none p-0 m-0 mb-10" 
          style={{display: "grid", gap: "1rem", marginRight: "2.5rem",marginBottom: "2.5rem",}}>

          {infoList.map(({ icon, title, description }, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-shrink-0 cursor-pointer"
                style={{ minWidth: '250px', padding: '1rem',border: '1px solid #ccc', borderRadius: '2rem',
                  backgroundColor: isHovered ? '#ebf8ff' : 'transparent', transition: 'all 0.3s ease',
                  boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                  transform: isHovered ? 'translateY(-5px)' : 'none',
              }}>
                  
              <div className="flex flex-col items-center">
                  <Image src={icon} alt={title} width={30} className="mb-2" />
                  <h3 className="sm:text-[11px] md:text-[18px] lg:text-[20px] text-gray-700">{title}</h3>
                  <p className="sm:text-[11px] md:text-[18px] lg:text-[20px] text-gray-600">{description}</p>
              </div>
              </li>  );   })}
        </ul>

        <h3 className="sm:text-[18px] md:text-[20px] lg:text-[30px] text-center">Tools I Use</h3>

        <ul className="flex items-center justify-center grid grid-cols-3">
          {toolsData.map((tool, index) => {
            const isHovered = hoveredToolIndex === index;
            return (
              <li
                key={index}
                onMouseEnter={() => setHoveredToolIndex(index)}
                onMouseLeave={() => setHoveredToolIndex(null)}
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full cursor-pointer"
                style={{
                  padding: '1rem', border: '5px solid #ccc', transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-5px)' : 'none', marginRight: '2.5rem',
                  boxShadow: isHovered ? '0 4px 10px rgba(0,0,0,0.1)' : 'none',
              }} >
                <Image src={tool} alt="tool" width={30} />
            </li>   );  })}
        </ul>
 
        

  </div>}
</div> 
  );
};

export default About;
