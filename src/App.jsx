import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <div className='w-screen mx-auto'>
        <Navbar />
        <div className='w-full max-w-[1440px] mx-auto px-5 2xl:px-0'>
          <HomePage />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
