import React from 'react'
import { FaBars } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4'>
      <motion.h1
            initial={{
            x: -250,
            opacity: 0, 
        }}
            animate={{
            x: 0,
            opacity: 1,
        }}
            transition={{ duration: 1.5 }}  className='w-full text-3xl font-bold text-[#000000]'>WeClean</motion.h1>
        
        <motion.div
            initial={{
            x: 250,
            opacity: 0, 
        }}
            animate={{
            x: 0,
            opacity: 1,
        }}
            transition={{ duration: 1.5 }}  className=''><FaBars /></motion.div>
      </div>
    </>
  )
}

export default navbar