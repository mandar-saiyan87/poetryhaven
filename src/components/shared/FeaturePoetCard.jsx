import React from 'react'
import { featuredpoets } from '../../assets/constants'

function FeaturePoetCard({ poetid }) {

  const poet = featuredpoets.filter((current) => current.id === poetid)


  return (
    <div className='my-8 max-w-max h-52 flex items-start justify-start gap-3 sm:gap-10'>
      <div className='w-80 h-full'>
        <img src={poet[0].img} alt="poetimg" className='w-full h-full aspect-square' />
      </div>
      <div className='w-full max-w-sm'>
        <p className='text-xl font-garamond font-semibold sm:text-3xl'>{poet[0].name}</p>
        <p className='text-sm text-slate-700 my-3'>DOB: {poet[0].dob}</p>
        <p className='text-base font-garamond line-clamp-3 sm:text-xl'>{poet[0].description}</p>
        <p className='mt-2 text-lg font-garamond text-red-600 underline underline-offset-2 decoration-2 cursor-pointer sm:text-xl'>Read More</p>
      </div>
    </div>
  )
}

export default FeaturePoetCard