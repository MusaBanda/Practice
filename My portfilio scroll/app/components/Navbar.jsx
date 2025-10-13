"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ovo, roboto } from '../layout';
import { useTheme } from "next-themes";
import { hooks } from '../hooks/hooks';


const Navbar = () => {

  const { theme, setTheme } = useTheme();
  const { isScroll, showForLargeScreen, showForSmallScreen } = hooks();


  return (
    <div  className='w-full'>
     

      {showForLargeScreen &&<nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  
        ${isScroll ? "bg-[#f5f5f5] dark-theme" : ""}`}>
        
        <h1 
          className={`sm:text-[30px] md:text-[60px] lg:text-[120px] font-bold ${roboto.className} ${isScroll ? "text-[black]" : ""}`}
          style={{ marginLeft: '2.5rem', marginTop: '1rem' }}
        >
          MusaBanda<span style={{ color: 'red' }}>.</span>
        </h1>

        <ul
          className='absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-6 list-none bg-white px-12 py-3 rounded-full 
          shadow-sm bg-opacity-80 border-2 border-gray-400'
          style={{ padding: '1rem', border: '1px solid white', backgroundColor: 'white',
            marginRight: '0.5rem', marginTop: '1.5rem', }}
        >
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ padding: '1rem', color: 'black' }} href='#top'>Home</a></li>
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ padding: '1rem', color: 'black' }} href='#about'>About Me</a></li>
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ padding: '1rem', color: 'black' }} href='#services'>Services</a></li>
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ padding: '1rem', color: 'black' }} href='#work'>My Work</a></li>
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ padding: '1rem', color: 'black' }} href='#contact'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <Image src={assets.moon_icon}  alt='' width={40}  height={40} className='cursor-pointer mr-14' 
           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{ marginLeft: '2.5rem', marginRight: '0.5rem', marginTop: '0.5rem' }} />

          <a  href='mailto:mosa.banda@hotmail.com'  
          className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline bg-[white] ${ovo.className}`} 
            style={{padding: '1rem', color: 'black', marginTop: '0.8rem', marginBottom: '0.5rem',
              border: '2px solid #ccc', borderRadius: '2rem', marginLeft: '0.5rem',
              marginRight: '1rem'    }} > 
          Email Me
            <Image src={assets.arrow_icon}  alt='' width={15} height={15}
              style={{ marginLeft: '1rem' }}  /> </a>
        </div>
      </nav>}

      {showForSmallScreen &&<nav className='text-center justify-center' style={{ marginTop: '2rem', marginBottom: '-7rem' }}>

      <div  
      style={{ display: 'flex', justifyContent: 'space-between',  alignItems: 'center'}}>
        <h1 style={{marginLeft:'1rem'}}> MusaBanda<span style={{ color: 'red' }}>.</span></h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}> 
          <Image src={assets.moon_icon}  alt='moon_icon' width={25}  height={25} className='cursor-pointer mr-14'
           onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
        <a style={{ color:'black', marginRight: '1rem', border: '2px solid #ccc',borderRadius: '2rem', padding: '0.5rem',}}
        href='mailto:mosa.banda@hotmail.com' className={`no-underline bg-[white] ${ovo.className}`}>Email Me</a></div>
      </div>

      <ul className='list-none items-center text-center justify-center'    
       style={{padding: '1rem', display: 'flex',}} >
          <li><a className={`text-[13px] no-underline ${ovo.className}`} 
          style={{ padding: '0.5rem', color: 'red' }} href='#top'>Home</a></li>
          <li><a className={`text-[13px] no-underline ${ovo.className}`} 
          style={{ padding: '0.5rem', color: 'red'}} href='#about'>About Me</a></li>
          <li><a className={`text-[13px] no-underline ${ovo.className}`} 
          style={{ padding: '0.5rem', color: 'red' }} href='#services'>Services</a></li>
          <li><a className={`text-[13px] no-underline ${ovo.className}`} 
          style={{ padding: '0.5rem', color: 'red' }} href='#work'>My Work</a></li>
          <li><a className={`text-[13px] no-underline ${ovo.className}`} 
          style={{ padding: '0.5rem', color: 'red' }} href='#contact'>Contact</a></li>
        </ul>
        
      </nav>}

    </div>
  );
};

export default Navbar;
