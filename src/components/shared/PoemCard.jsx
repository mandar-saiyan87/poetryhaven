import React from 'react'

function PoemCard({ poem }) {
  return (
    <div key={poem.id} className='w-full h-[400px] cursor-pointer'>
      <div className='w-full h-[50%]'>
        <img src={poem.image} alt="imgmain" className='w-full h-full object-cover' />
      </div>
      <div>
        <p className='text-titlesecondary text-lg font-semibold mt-2'>{poem.title}</p>
        <p className='text-sm  text-slate-700 my-1 uppercase tracking-wide'>by {poem.author}</p>
        <p className='text-slate-800 font-garamond line-clamp-3'>{poem.description}</p>
      </div>
    </div>
  )
}

export default PoemCard