import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function Founder() {
  return (
    <motion.div
    initial={{opacity: 0, x: 200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once:true}} 
    className='p-2 md:px-20'> 
           <div className='flex justify-center items-center gap-2 mx-auto my-10 bg-black h-10 max-w-lg rounded'>
         <span className='text-white font-mono font-bold text-2xl'>Founder Of Ashish</span><img className='w-24 bg-black ' src={assets.logo} alt="" />
          </div>
          <div className='flex flex-col justify-center md:flex-row gap-8 md:gap-24 mb-10' > 
            <div className=' md:h-[400px] w-full md:w-1/4 p-2 border-black shadow-black shadow-md' >
                <img className='h-[90%] w-full'  src={'/ashish pic1.jpg'} alt="" />
                <h1 className='text-center p-2 text-2xl font-semibold underline underline-offset-4 decoration-1' >Ashish Purimitla</h1>
            </div>
            <div className='w-full md:w-[65%]'>
                <h1 className='text-2xl md:m-5 font-semibold' >Welcome to Ashish Estate.</h1>
                <p> 
                At <span className='font-semibold'>Ashish Estate</span>, we believe in helping you find not just a house, but a place to call home. With years of experience in the real estate market, our mission is to provide personalized service, expert guidance, and a seamless experience from start to finish. Whether you're buying your first home, selling, or investing, we’re here to make your journey smooth, transparent, and successful. Let us help you make the right choice in real estate.</p>
                <p className='md:pt-20 pt-5 pb-3 md:pb-5 text-2xl font-semibold' >Make your Dreams, into your Addresses.</p>
                <div className='flex justify-end text-xl font-bold' >
                    -Ashish Purimitla.
                </div>

            </div>
          </div>
    </motion.div>
  )
}

export default Founder