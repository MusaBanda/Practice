import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import assets from '@/assets/assets'
import { s } from '@/app/layout' 
import { hooks } from '../hooks/hooks'


function Footer() {

const { showForLargeScreen, showForSmallScreen } = hooks();

  return (
    <div className=' mt-20 fill w-full h-[20rem] border-t border-gray-400 text-[black bg-#f5f5f5
    '>
        <div className='text-center'>
            <h1 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${s.className}`}>MUSABANDA<span className='text-[red]'>.</span></h1>

            <div className=' sm:text-[18px] md:text-[20px] lg:text-[30px]  w-max flex items-center gap-2 mx-auto mb-2
            'style={{marginTop:'2rem', marginBottom:'1rem', gap:'0.5rem', }}>
            
                  < Image src={assets.mail_icon} alt='' className='w-6' />
                  mosa.banda@hotmail.com
            </div>
        </div>
        <div className='sm:text-[18px] md:text-[20px] lg:text-[30px] text-center sm:flex items-center justify-between border-t border-gray-400
        mx-[10%] mt-12 py-6'>
            <p style={{marginTop:'2rem'}}>© 2025 Mthimkhulu Musa. All rights reserved.</p>
           {showForLargeScreen && <ul className='list-none sm:text-[18px] md:text-[20px] lg:text-[30px] '
            style={{ display: 'flex', gap: '2rem', marginLeft:'-5rem',  marginRight: '0.5rem', marginBottom:'0rem'}}>
                <li ><a target='_blank' href="https://github.com/MusaBanda">
                <Image src={assets.github} alt style={{width: 'auto', height:'3rem'}} /></a></li>
                <li ><a target='_blank' href="https://instagram.com/@musa_banda_kamthimkhulu/">
                <Image src={assets.instagram} alt style={{width: 'auto', height:'3rem'}} /></a></li>
                <li ><a target='_blank' href="https://facebook.com/@mosa.banda.9/">
                <Image src={assets.facebook} alt style={{width: 'auto', height:'3rem'}} /></a></li>
            </ul>}

             {showForSmallScreen && <ul className='list-none sm:text-[18px] md:text-[20px] lg:text-[30px] 
             items-center justify-between'
            style={{ display: 'flex', marginLeft:'1rem',  marginRight: '4rem', marginBottom:'0rem'}}>
                <li ><a target='_blank' href="https://github.com/MusaBanda">
                <Image src={assets.github} alt='' style={{width: 'auto', height:'2rem'}} /></a></li>
                <li ><a target='_blank' href="https://instagram.com/@musa_banda_kamthimkhulu/">
                <Image src={assets.instagram} alt='' style={{width: 'auto', height:'2rem'}} /></a></li>
                <li ><a target='_blank' href="https://facebook.com/@mosa.banda.9/">
                <Image src={assets.facebook} alt='' style={{width: 'auto', height:'2rem'}} /></a></li>
            </ul>}
        </div>
    </div>
  )
}

export default Footer