import React from 'react'
import Navbar from './components/shared/Navbar'
import HomePage from './pages/HomePage'


function App() {


  return (
    <>
      <div className='w-full max-w-[1536px] mx-auto'>
        <Navbar />
        <HomePage />
      </div>
    </>
  )
}

export default App
