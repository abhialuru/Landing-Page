import React, { useEffect, useState } from 'react'
import {assets} from '../../assets/assets'


function Navbar() {

 const [showMobileMenu, setShowMobileMenu] = useState(false);

 useEffect(()=>{
  if (showMobileMenu) {
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  return ()=>{
    document.body.style.overflow = 'auto'
  }
 },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container text-sm mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent'>
          <div className='flex space-x-2'>
         <span className='text-white font-mono font-bold text-2xl'>Ashish</span><img className='w-24' src={assets.logo} alt="" />
          </div>
              <ul className='hidden md:flex gap-5 text-white'>
                <a href='#Header' className='cursor-pointer hover:text-gray-500'>Home</a>
                <a href='#About' className='cursor-pointer hover:text-gray-500'>About us</a>
                <a href='#Projects' className='cursor-pointer hover:text-gray-500'>Projects</a>
                <a href='#contact' className='cursor-pointer hover:text-gray-500'>Contact us</a>
            </ul>
            <button className= 'hidden md:block  bg-white px-6 py-2 rounded-full'>sign up</button>
            <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-8' alt="" />
        </div>

        <div className= {`md:hidden ${showMobileMenu ?'fixed w-full':'h-0 w-0' }  top-0 right-0 bottom-0 bg-white overflow-hidden transition-all`}>
          <div className='flex justify-end'>
            {/* <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className='w-6 m-4' alt="" /> */}
          </div>
          <ul className='flex flex-col gap-2 items-center mt-6 font-medium text-lg' >
            <a onClick={()=>setShowMobileMenu(false)}  href='#Header'>Home</a>
            <a onClick={()=>setShowMobileMenu(false)}   href='#About'>About us</a>
            <a onClick={()=>setShowMobileMenu(false)} href='#Projects'>Project</a>
            <a onClick={()=>setShowMobileMenu(false)} href='#contact'>Contact us</a>
          </ul>
        </div>
    </div>

  )
}

export default Navbar