'use client'

import React, { useState, useEffect } from 'react'
import { ovo } from '../layout'
import Footer from './Footer'
import {hooks}from '../hooks/hooks'

const Contact = () => {

const { showForLargeScreen, showForSmallScreen, onSubmit, result} = hooks();

  return (
  <div id='contact'>
    <div
      className="text-center flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-5xl mx-auto">
        <h3 className={`sm:text[18px] md:text[18px] lg:text-[30px] font-bold ${ovo.className} font-bold mb-2 mt-6`}
        style={{marginTop:'3rem'}}>Connect with me</h3>
        <h1 className={`sm:text[18px] md:text[30px] font-bold lg:text-[60px] ${ovo.className}`}
        style={{marginTop:'1rem'}}>Get in touch</h1>
        <p className={`sm:text[18px] md:text[18px] lg:text-[30px] font-bold ${ovo.className} mb-12 -mt-8`}
        style={{marginTop:'1rem', marginRight:'1rem', marginLeft:'1rem'}}>
          I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      
        {showForSmallScreen && <form onSubmit={onSubmit} className="flex flex-col gap-6 px-4" 
          style={{maxWidth:'300px', margin:'0 auto', maxHeight:'40rem', marginTop:'-3rem'}}>
          <div className="grid grid-cols-1 ">
            <input type="text" placeholder="Enter your name" required
              className="text-[20px] p-4 rounded-xl w-full" name='name'
              style={{ borderRadius:'0.5rem', marginBottom:'0rem', marginRight:'1rem', 
                marginTop:'5rem', height:'3rem', }}
            />
            <input
              type="email"  placeholder="Enter your email" required
              className="text-[20px] p-4 rounded-xl w-full" name='email'
              style={{ borderRadius:'0.5rem', marginBottom:'0rem', marginleft:'1rem', 
                marginTop:'0rem', height:'3rem', }}
            />
          </div>

          <textarea
            placeholder="Enter your message" required
            className="text-[30px] p-6 rounded-xl w-full h-[360px] resize-none bg-white" name='message'
            style={{ borderRadius:'0.5rem', marginBottom:'1rem', border:'2px solid #000',}}
          ></textarea>

          <div className="flex gap-6 justify-center mt-4">
            <button type="submit" className="text-[20px] bg-gray-200 px-8 py-2 rounded-xl
            "style={{borderRadius:'0.5rem', color:'white', background:'black', marginRight:'1rem', 
            width:'7rem', height:'3rem', marginBottom:'-10rem',}}
            >Send</button>
            <button type="reset" className="text-[20px] bg-gray-200 px-8 py-2 rounded-xl"
            style={{borderRadius:'0.5rem', color:'white', background:'black', marginRight:'0rem', 
            width:'7rem', height:'3rem', marginBottom:'-10rem',}}>Reset</button>
          </div>
          <p className='text-[30px] mt-4' style={{margin:'5rem'}}>{result}</p>
        </form> }

         { showForLargeScreen && <form onSubmit={onSubmit} className="flex flex-col gap-6 px-4" 
         >
          <div className="grid grid-cols-2 md:grid-cols-2 " style={{ gap:'0.9rem', margin:'0 auto', }}>
            <input type="text" placeholder="Enter your name" required
              className="text-[30px] p-4 rounded-xl w-full" name='name'
              style={{ borderRadius:'0.5rem', marginRight:'0rem', 
                marginTop:'5rem', height:'3rem', width:'18rem' }}
            />
            <input
              type="email"  placeholder="Enter your email" required
              className="text-[30px] p-4 rounded-xl w-full" name='email'
              style={{ borderRadius:'0.5rem',  marginleft:'0rem', 
                marginTop:'5rem', height:'3rem', width:'18rem' }}
            />
          </div>

          <textarea  style={{maxWidth:'600px', margin:'0 auto', maxHeight:'60rem', marginTop:'1rem',
                             borderRadius:'0.5rem', marginBottom:'1rem', border:'2px solid #000'}}
            placeholder="Enter your message" required
            className="text-[30px] p-6 rounded-xl w-full h-[360px] resize-none bg-white" name='message'
           
          ></textarea>

          <div className="flex gap-6 justify-center mt-4">
            <button type="submit" className="text-[20px] bg-gray-200 px-8 py-2 rounded-xl
            "style={{borderRadius:'0.5rem', color:'white', background:'black', marginRight:'1rem', 
            width:'8rem', height:'3rem', marginBottom:'-10rem',}}
            >Send</button>
            <button type="reset" className="text-[20px] bg-gray-200 px-8 py-2 rounded-xl"
            style={{borderRadius:'0.5rem', color:'white', background:'black', marginRight:'20rem', 
            width:'8rem', height:'3rem', marginBottom:'-10rem',}}>Reset</button>
          </div>
          <p className='text-[30px] mt-4' style={{margin:'5rem'}}>{result}</p>
        </form>}
      </div>
    </div>
  </div>
  )
}

export default Contact

