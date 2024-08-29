import React, { useState } from 'react'
import { featuredpoems, featuredpoets } from "../assets/constants"
import FeaturedSlider from '../components/FeaturedSlider'
import FeaturePoetCard from '../components/shared/FeaturePoetCard'


function HomePage() {

  const [featuredpoet, setfeaturedpoet] = useState(featuredpoets[0].id)

  return (
    <>
      <hr className='w-full h-1 bg-slate-200' />
      {/* Featured Poems Start */}
      <div className='my-6'>
        <div>
          <div className='flex items-center justify-between'>
            <p className='text-2xl text-titleprimary tracking-wider font-garamond font-semibold lg:text-4xl'>Featured Poems</p>
            <p className='text-sm tracking-wide font-garamond font-semibold text-red-600 cursor-pointer'>View All</p>
          </div>
          <div className='w-full my-3 flex items-center justify-center'>
            <FeaturedSlider featuredpoems={featuredpoems} />
          </div>
        </div>
      </div>
      {/* Featured Poems End */}
      {/* Featured Poets Start */}
      <div className='my-6'>
        <div>
          <div className='flex items-center justify-between'>
            <p className='text-2xl text-titleprimary tracking-wider font-garamond font-semibold lg:text-4xl'>Featured Poets</p>
            <p className='text-sm tracking-wide font-garamond font-semibold text-red-600 cursor-pointer'>View All</p>
          </div>
          <div>
            <div className='my-3'>
              <ul className='flex text-sm gap-x-5 uppercase overflow-x-auto scrollbar-hide'>
                {featuredpoets.map((poets) => (
                  <li
                    className={featuredpoet === poets.id ? 'underline underline-offset-4 decoration-titlesecondary decoration-2 cursor-pointer' : 'cursor-pointer'} key={poets.id}
                    onClick={() => setfeaturedpoet(poets.id)}
                  >
                    {poets.name}</li>
                ))}
              </ul>
            </div>
            {
              featuredpoet &&
              <FeaturePoetCard poetid={featuredpoet} />
            }

          </div>
        </div>
      </div>
      {/* Featured Poets End */}
      {/* Subscribe Section Start */}
      <div className='w-full my-6 flex flex-col text-center items-center md:flex-row p-4 md:text-start justify-between bg-titleprimary md:p-8'>
        <div className=''>
          <p className='text-white text-lg font-bold md:text-2xl'>Lorem ipsum dolor sit.</p>
          <p className='text-white text-xl font-bold md:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button className='mt-4 bg-white font-semibold py-2 px-4 text-red-600 md:mt-0'>SUBSCRIBE</button>
      </div>
      {/* Subscribe Section End */}
    </>
  )
}

export default HomePage