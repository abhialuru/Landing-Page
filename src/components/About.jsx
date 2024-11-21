import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'


function About() {
  return (
    <motion.div
        initial={{opacity: 0, x:200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once:true}}>
        <div id='About' className='container flex flex-col justify-center items-center m-10 mx-auto '>
            <h1 className='text-2xl sm:text-4xl text-center font-bold ' >About <span className='underline font-light underline-offset-4 under decoration-2' >Our Brand</span></h1>
            <p className='text-gray-500 mb-4 mt-2 max-w-80 text-center' >Passionate about properties, dedicated to vision</p>
        </div>
        <div className='flex flex-col items-center md:flex-row m-10 md:gap-20 md:items-start md:mx-40 md:mt-30'>
            <img className='w-full text-center sm:w-1/2 max-w-lg' src={assets.brand_img} alt="" />
            <div className='flex flex-col items-center md:items-start gap-10'>
                <div className='grid grid-cols-2 gap-5 w-full mt-10'>
                    <div>
                    <p className='text-4xl font-semibold'>10+</p>
                    <p className='text-gray-500 max-w-sm'>Excellence in years</p>
                    </div>
                    <div>
                    <p className='text-4xl font-semibold'>12+</p>
                    <p className='text-gray-500 max-w-sm'>Projects Completed</p>
                    </div>
                    <div>
                    <p className='text-4xl font-semibold'>20+</p>
                    <p className='text-gray-500 max-w-sm'>Mn.Sq. Ft. Delivered</p>
                    </div>
                    <div>
                    <p className='text-4xl font-semibold'>25+</p>
                    <p className='text-gray-500 max-w-sm'>Ongoing Projects</p>
                    </div>
                    </div>
                    <div>
                    <p>At <span className='font-semibold'>Ashish Estate</span>, we pride ourselves on our dedicated team of real estate professionals, who work tirelessly to provide outstanding service and deliver results. Join the many satisfied clients who have made us their first choice for real estate services, and experience the difference of working with a company that truly cares about your success.
                   </p>
                    </div>
                    <button className='bg-blue-500 px-6 py-2 text-white rounded'>Learn More</button>
                    </div>
        </div>
    </motion.div>
  )
}

export default About