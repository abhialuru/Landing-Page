import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion';

function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardstoshow, setCardstoshow] = useState(1);
  
  const nextProjects = () => {
     setCurrentIndex(prev=>(prev+1) % projectsData.length )
  }
  
  const prevProjects = () => {
    setCurrentIndex(prev=> prev===0? projectsData.length-1 : prev-1)
 }

 useEffect(()=>{
    function  updateCardsShow() {
        if(window.innerWidth>=1024){
            setCardstoshow(projectsData.length);
        }
        else{
            setCardstoshow(1);
        }
    }

    updateCardsShow();

    window.addEventListener('resize', updateCardsShow)
    window.removeEventListener('resize', updateCardsShow)

 },[])
 


  return (
    <motion.div
        initial={{opacity: 0, x: -200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once:true}}
         id='Projects' className='flex flex-col gap-2 text-center px-2 py-6 md:lg-32 md:px-20 mt-20 w-full' > 
       <h1 className='text-3xl font-bold' >Projects <span className='underline underline-offset-4 under decoration-1 font-light' >Completed</span> </h1>
       <p className='text-center text-gray-500 mx-auto max-w-80'>Crafting Spaces, Building Legacies. Explore out Portfolio</p>
       <div className='flex justify-end space-x-2' >
        <button onClick={prevProjects} >
            <img className='bg-gray-200 p-3 rounded' src={assets.left_arrow} aria-label='previous-project' />
        </button>
        <button onClick={nextProjects}>
            <img className='bg-gray-200 p-3 rounded' src={assets.right_arrow} aria-label='next-project' />
        </button>
       </div>

       <div className='overflow-hidden' >
        <div className='flex gap-8 m-4 md:m-0 transition-transform duration-500 ease-in-out'
         style={{transform: `translateX(-${(currentIndex * 100) / cardstoshow}%)`}}
        >
        {projectsData.map((project, i)=>
        <div className='relative flex-shrink-0 w-full sm:w-1/4' key={i}>
                <img className='w-full h-auto mb-14' src={project.image} alt={project.title} />
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                    <div className='inline-block bg-white px-6 py-4 w-3/4 shadow-md' >
                        <h2 className='font-semibold text-xl text-gray-800'>{project.title}</h2>
                        <p className='text-sm text-gray-500' >
                            <span>{project.price}</span>|<span>{project.location}</span>
                        </p>
                    </div>
                </div>
        </div>
        
        )}
        </div>
       </div>
    </motion.div>
    
  )
}

export default Projects