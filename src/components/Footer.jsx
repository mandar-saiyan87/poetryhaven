import React from 'react'
import { appimages } from '../assets/constants'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='bg-titleprimary py-10'>
      <div className='w-full max-w-[1440px] mx-auto flex flex-col justify-start lg:flex-row lg:items-center lg:justify-between px-5 2xl:px-0'>
        <div className='flex items-center justify-start gap-5'>
          <img src={appimages.AppLogo} alt="applogo" className='w-20' />
          <div className='w-full max-w-72 flex flex-col gap-y-2'>
            <p className='text-white font-semibold text-sm'>THE PEOPLE'S POETRY HAVEN</p>
            <p className='text-white text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, alias explicabo? Veniam cupiditate non exercitationem aliquid quae, dolore eius minima.</p>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start my-3 lg:my-0'>
          <div>
            <SocialIcon url='https://x.com/' bgColor='transparent' style={{ width: '40px', height: '40px' }} />
            <SocialIcon url='https://www.facebook.com/' bgColor='transparent' style={{ width: '45px', height: '45px' }} />
            <SocialIcon url='https://www.instagram.com/' bgColor='transparent' style={{ width: '45px', height: '45px' }} />
          </div>
          <div>
            <ul className='flex flex-wrap text-sm font-semibold text-white gap-x-5 gap-y-2 lg:gap-5'>
              <li className='cursor-pointer'>ABOUT US</li>
              <li className='cursor-pointer'>CONTACT US</li>
              <li className='cursor-pointer'>FAQ</li>
              <li className='cursor-pointer'>PRIVACY POLICY</li>
              <li className='cursor-pointer'>TERMS & CONDITIONS</li>
            </ul>
          </div>
          <div className='text-slate-800 text-sm mt-1'>
            <p>16 Figueroa Street, Los Angeles, CA 90050</p>
            <p>©2024 Poetry Haven, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer