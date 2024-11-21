import React from 'react'
import Navbar from './Navbar/Navbar'
import { motion } from 'framer-motion';

function Header() {
  return (
    <div className='min-h-screen w-full flex items-center bg-cover bg-center overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}}>
        <Navbar/>
        <motion.div
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once:true}}
         className='container text-center mx-auto md:px-32 lg:px-20 px-6 py-4'>
          <h2 className='md:text-5xl font-semibold max-w-3xl text-3xl text-white inline-block pt-20'>Explore Homes that fit your dreams</h2>
         <div className='text-white pt-5 space-x-6' >
           <a href='#Projects' className=' border-white border-2 px-4 py-1 rounded-sm'>Projects</a>
           <a href='#contact' className='bg-blue-500 px-4 py-2 rounded-sm'>Contact us</a>
           </div>
        </motion.div>
    </div>
  )
}

export default Header