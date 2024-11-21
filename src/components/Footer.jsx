import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='w-full md:px-20 lg:px-32 bg-gray-900 pt-10 mt-10 p-4' >
        <div className='flex md:flex-row flex-col md:gap-20'>
            <div className='w-full md:w-[65%] text-white gap-4 md:p-5'>
            <div className='flex space-x-2 mb-2'>
          <span className='text-white font-mono font-bold text-2xl'>Ashish</span><img className='w-24' src={assets.logo} alt="" />
          </div>
 <p><span className='font-semibold'>Ashish Estate</span> is a trusted leader in the real estate industry, known for our commitment to excellence and exceptional client service. Over the years, we have grown into a dynamic and successful company, specializing in residential, commercial, and investment properties. Our success is driven by a deep understanding of market trends, a strong network of industry professionals, and a client-first approach that ensures personalized solutions for every buyer, seller, and investor we work with.</p>
             </div>
            <div className='text-white'>
                <h1 className='font-semibold pt-5 pb-2'>Company</h1>
                <ul className='flex md:flex-col gap-5 md:gap-2 text-white'>
                <a href='#Header' className='cursor-pointer hover:text-gray-500'>Home</a>
                <a href='#About' className='cursor-pointer hover:text-gray-500'>About us</a>
                <a href='#Projects' className='cursor-pointer hover:text-gray-500'>Projects</a>
                <a href='#contact' className='cursor-pointer hover:text-gray-500'>Contact us</a>
            </ul>
            </div>
            </div>
            <hr className='mt-10 mb-5' />
            <div className='text-white flex justify-center ' >Copyright &copy;2024: Designed by<span className='ml-2'>abhialuru</span></div>
    </div>
  )
}

export default Footer