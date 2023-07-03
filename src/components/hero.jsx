import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <div className='min-h-screen'>
        <div className='text-black text-xl'></div>
        {/* Blurred background circles, moving around each other in circles */}
        <div className='absolute mt-20 w-52 h-52 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob'></div>
        <div className='absolute right-1 mt-20 w-52 h-52 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob'></div>
        <div className='absolute top-1 ml-10 mt-20 w-52 h-52 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob'></div>
      </div>
    </>
  )
}

export default Hero