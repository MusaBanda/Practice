import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from "@/assets/assets";
import { roboto, ovo,} from "../layout";
import Services from './Services';
import { hooks } from '../hooks/hooks';

const Header = () => {

  const { showForLargeScreen, showForSmallScreen, isContactClicked, isResumeClicked,
    handleContactClick, handleResumeClick } = hooks();
  
  return (
    <div className='flex flex-col items-center justify-center h-screen max-w-md mx-auto'
      style={{marginBottom: '10rem' }} >
      <div>
        <Image
          src={assets.mypic} width={160} height={160} alt='' className='rounded-full'
          style={{ marginBottom: '-2rem', marginTop: '9rem',}}
        />
      </div>

      <h3 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${ovo.className}`}
        style={{ marginBottom: '-1rem' }}>
        Hi I am Musa Dick Banda <Image src={assets.hand_icon} width={50} height={50} />
      </h3>

      <h1 
        className={`sm:text-[18px] md:text-[20px] lg:text-[30px] block text-center ${ovo.className}`}
         style={{ marginLeft: '0rem', }}>
        Front end web developer based South Africa
      </h1>

      <p
        className={`sm:text-[18px] md:text-[20px] lg:text-[30px]  block text-center ${ovo.className}`}
        style={{ marginTop: '-1rem', marginLeft: '1rem', marginRight:'1rem' }}
      >
        I'm a beginner front-end web developer, just starting out on my journey. I may not have experience yet,
        but I'm learning every day and excited to grow.
      </p>

     { showForLargeScreen && <div className='flex flex-col-2 items-center'>
        <a href="https://wa.me/27694163922?text=Hi%20Musa%2C%20I%20just%20came%20across%20your%20portfolio%20and%20I'm%20really%20impressed!%20I'd%20love%20to%20learn%20more%20about%20your%20work.%20Let's%20connect!" 
        className={`text-[15px] no-underline text-bold 
         ${roboto.className}`} onClick={handleContactClick}aria-label="Contact Us"
          style={{  padding: '0.8rem',cursor: 'pointer', marginRight: '1rem', border: '4px solid #000',
            borderRadius: '4rem', transition: 'all 0.3s ease',  background: '#000',
             backgroundColor: isContactClicked ? 'orange' : 'green',   color: 'white', 
          }}>
          WHATSAPP ME
          <Image src={assets.phone_icon} width={25} height={25} alt=''
            style={{ marginLeft: '1rem', marginTop: '-1rem', marginBottom: '-0.3rem',   
            }}/></a>

        <a href="/cv.pdf" download className={`text-[15px] no-underline
          ${roboto.className}`} onClick={handleResumeClick}aria-label="Download My Resume"
          style={{padding: '0.86rem', border: '4px solid #000', marginBottom: '1rem',
            borderRadius: '4rem', marginTop: '1rem',cursor: 'pointer',  
            backgroundColor: isResumeClicked ? 'orange' : 'white',
            color: isResumeClicked ? '#fff' : '#000',
            transition: 'all 0.3s ease', }}>
          MY RESUME
          <Image src={assets.download_icon}  width={25} height={20} alt=''
            style={{ marginLeft: '1rem', marginTop: '0rem',  marginBottom: '-0.3rem', 
            }}/></a>
      </div>}


      {showForSmallScreen &&<div className='grid drid-col-1 items-center'>

        <a href="https://wa.me/27694163922?text=Hi%20Musa%2C%20I%20just%20came%20across%20your%20portfolio%20and%20I'm%20really%20impressed!%20I'd%20love%20to%20learn%20more%20about%20your%20work.%20Let's%20connect!" className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline text-bold 
         ${roboto.className}`} onClick={handleContactClick}aria-label="Contact Us"
          style={{ padding: '0.8rem', cursor: 'pointer',  marginTop: '1rem', border: '4px solid #000',
           borderRadius: '4rem',transition: 'all 0.1s ease', background: '#000', color: 'white',
            backgroundColor: isContactClicked ? 'orange' : 'green', }}>
          WHATSAPP ME
          <Image src={assets.phone_icon} width={20} height={20} alt=''
            style={{marginLeft: '1rem', marginTop: '-1rem',marginBottom: '-0.3rem',}}/></a>

        <a href="/cv.pdf" download className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline
          ${roboto.className}`} onClick={handleResumeClick}aria-label="Download My Resume"
          style={{ padding: '0.86rem',border: '4px solid #000', marginBottom: '1rem',
           borderRadius: '4rem', marginTop: '1rem', cursor: 'pointer',
           backgroundColor: isResumeClicked ? 'orange' : 'white',
            color: isResumeClicked ? '#fff' : '#000',
            transition: 'all 0.3s ease', }} >
          MY RESUME
          <Image src={assets.download_icon}  width={25} height={20} alt=''
            style={{marginLeft: '1rem', marginTop: '0rem',marginBottom: '-0.3rem',}}/></a></div>}
    </div>
  );
};

export default Header;

