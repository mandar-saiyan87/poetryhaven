import React, { useState, useEffect, useRef } from 'react'
import { appimages, exploreroutes, aboutroutes } from '../assets/constants'

function Navbar() {

  const [navshadow, setNavShadow] = useState(false)

  const [clicktab, setClickTab] = useState('')

  const [drawer, setDrawer] = useState(false)

  const exploreref = useRef(null)
  const aboutref = useRef(null)

  function handleopendropdrown(tab) {
    if (clicktab === tab) {
      setClickTab('')
    } else {
      setClickTab(tab)
    }
  }

  function handleclosedropdown(e) {
    if (exploreref.current && !exploreref.current.contains(e.target) && aboutref.current && !aboutref.current.contains(e.target)) {
      setClickTab('')
    }
  }


  function handleShadow() {
    if (window.scrollY >= 10) {
      setNavShadow(true)
    } else {
      setNavShadow(false)
    }
  }


  useEffect(() => {
    document.addEventListener('scroll', handleShadow)

    return () => {
      document.removeEventListener('scroll', handleShadow)
    }
  })

  useEffect(() => {
    document.addEventListener('click', handleclosedropdown)

    return () => {
      document.removeEventListener('click', handleclosedropdown)
    }
  })



  return (
    <>
      {/* Large Screen Navbar */}
      <div className={navshadow ? 'hidden lg:block w-full shadow-md shadow-slate-200 sticky top-0 left-0 z-10 px-5 2xl:px-0' : 'hidden lg:block w-full sticky top-0 left-0 z-10 px-5 2xl:px-0'}>
        <div className='py-5 w-full max-w-[1440px] mx-auto bg-white h-40'>
          <div className='flex items-center justify-end gap-x-4'>
            <div className='flex items-center h-8'>
              <input type="text" className='border-slate-400 border-[1px] bg-slate-200 focus:bg-white focus:outline-none focus:border-red-600 p-1 px-2 text-sm text-slate-600 placeholder:text-slate-600 w-full h-full' placeholder='Search by Poet or Poem' />
              <button className='bg-red-600 h-full flex items-center justify-center px-2 active:opacity-75'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>

            </div>
            <button className='text-red-600 text-sm font-semibold active:opacity-75'>SUBSCRIBE</button>
            <button className='text-sm text-white font-semibold bg-black py-2 px-4 rounded-lg active:opacity-75'>Create Account</button>
            <button className='text-sm text-white font-semibold bg-titleprimary py-2 px-4 rounded-lg active:opacity-75'>Login</button>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-x-6'>
              <img src={appimages.AppLogo} alt="applogo" className='w-20' />
              <div className='flex flex-col gap-3'>
                <p className='text-titleprimary font-semibold'>THE PEOPLE'S POETRY HAVEN</p>
                <ul className='flex items-center justify-start gap-x-12 tracking-wide text-sm'>
                  <li className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-4 decoration-2'>HOME</li>
                  <li className='relative'
                    ref={exploreref}
                    onClick={() => handleopendropdrown('EXPLORE')}
                  >
                    <p
                      className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-4 decoration-2'
                    >EXPLORE</p>
                    {/* EXPLORE dropodown menu */}
                    {clicktab === 'EXPLORE' &&
                      <div className='min-w-max absolute z-20 text-sm bg-white py-3 px-5 border-[1px] border-slate-200 top-8 text-slate-600 flex flex-col gap-2'
                        onClick={(e) => e.stopPropagation()}
                      >
                        {
                          exploreroutes.map((route) => (
                            <p key={route.name} className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-2 decoration-1'>{route.name}</p>
                          ))
                        }

                      </div>
                    }
                  </li>
                  <li className='relative'
                    ref={aboutref}
                    onClick={() => handleopendropdrown('ABOUT')}
                  >
                    <p
                      className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-4 decoration-2'
                    >ABOUT US</p>
                    {/* About dropodown menu */}
                    {clicktab === 'ABOUT' &&
                      <div className='min-w-max absolute z-20 text-sm bg-white py-3 px-5 border-[1px] border-slate-200 top-8 text-slate-600 flex flex-col gap-2'
                        onClick={(e) => e.stopPropagation()}
                      >
                        {
                          aboutroutes.map((route) => (
                            <p key={route.name} className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-2 decoration-1'>{route.name}</p>
                          ))
                        }

                      </div>
                    }
                  </li>
                  <li className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-4 decoration-2'>CONTACT US</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile & Tablet Navbar */}
      <div className={navshadow ? 'w-full shadow-md shadow-slate-200 sticky top-0 left-0 z-10 px-5 lg:hidden' : 'w-full sticky top-0 left-0 z-10 px-5 lg:hidden'}>
        <div className='py-5 w-full max-w-[1440px] mx-auto bg-white h-40'>
          <div className='w-full flex items-center justify-end gap-x-4'>
            <div className='flex items-center h-8'>
              <input type="text" className='border-slate-400 border-[1px] bg-slate-200 focus:bg-white focus:outline-none focus:border-red-600 p-1 px-2 text-sm text-slate-600 placeholder:text-slate-600 w-full h-full' placeholder='Search by Poet or Poem' />
              <button className='bg-red-600 h-full flex items-center justify-center px-2 active:opacity-75'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
            <button className='text-red-600 text-sm font-semibold active:opacity-75'>SUBSCRIBE</button>
          </div>
          <div className='flex items-center justify-between mt-5 md:mt-0'>
            <div className='flex items-center justify-start gap-x-6'>
              <img src={appimages.AppLogo} alt="applogo" className='w-16 md:w-20' />
            </div>
            <div className='flex items-center justify-center' onClick={() => setDrawer(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* NavBar Drawer */}
      <div className={drawer ? 'fixed z-40 top-0 right-0 w-screen h-screen bg-black/60 lg:hidden' : 'hidden'} onClick={() => setDrawer(false)}>
        <div className={drawer ? 'fixed bg-white w-[70%] h-full top-0 right-0 sm:w-[50%] py-3 px-2 overflow-y-auto' : ''} onClick={(e) => e.stopPropagation()}>
          <div className='flex items-center gap-3'>
            <img src={appimages.AppLogo} alt="applogo" className='w-16' />
            <p className='text-titleprimary text-sm font-semibold'>THE PEOPLE'S POETRY HAVEN</p>
          </div>
          <hr className='w-full h-[2px] bg-slate-200 my-5' />
          <ul className='flex flex-col ml-3 gap-y-7 tracking-wide text-sm'>
            <li className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-4 decoration-2'>HOME</li>
            <li className='relative'
              ref={exploreref}
              onClick={() => handleopendropdrown('EXPLORE')}
            >
              <p
                className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-4 decoration-2'
              >EXPLORE</p>
              {/* EXPLORE dropodown menu */}
              {clicktab === 'EXPLORE' &&
                <div className='min-w-max absolute z-20 text-sm bg-white py-3 px-5 border-[1px] border-slate-200 top-8 text-slate-600 flex flex-col gap-2'
                  onClick={(e) => e.stopPropagation()}
                >
                  {
                    exploreroutes.map((route) => (
                      <p key={route.name} className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-2 decoration-1'>{route.name}</p>
                    ))
                  }

                </div>
              }
            </li>
            <li className='relative'
              ref={aboutref}
              onClick={() => handleopendropdrown('ABOUT')}
            >
              <p
                className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-4 decoration-2'
              >ABOUT US</p>
              {/* About dropodown menu */}
              {clicktab === 'ABOUT' &&
                <div className='min-w-max absolute z-20 text-sm bg-white py-3 px-5 border-[1px] border-slate-200 top-8 text-slate-600 flex flex-col gap-2'
                  onClick={(e) => e.stopPropagation()}
                >
                  {
                    aboutroutes.map((route) => (
                      <p key={route.name} className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-2 decoration-1'>{route.name}</p>
                    ))
                  }

                </div>
              }
            </li>
            <li className='cursor-pointer hover:text-titleprimary hover:underline hover:underline-offset-4 decoration-2'>CONTACT US</li>
          </ul>
          <div className='flex mt-6 ml-3 gap-3'>
            <button className='text-xs text-white font-semibold bg-black py-2 px-4 rounded-lg active:opacity-75'>Create Account</button>
            <button className='text-xs text-white font-semibold bg-titleprimary py-2 px-4 rounded-lg active:opacity-75'>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar