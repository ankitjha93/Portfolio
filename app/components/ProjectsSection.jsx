'use client'

import React, { useRef, useState } from 'react'
import ProjectCards from './ProjectCards'
import ProjectTag from './ProjectTag'
import {animate, motion, useInView} from 'framer-motion'


const projectsData = [
   {
    id:1,
    title:'Netflix Clone',
    description:'Project 1 description',
    image:'/projects/netflix-clone.png',
    tag : ['All', 'Web'],
    gitUrl :'/',
    previewUrl : '/',
   },
   {
    id:2,
    title:'Expense Tracker',
    description:'Project 2 description',
    image:'/projects/expense-tracker.png',
    tag : ['All', 'Web'],
    gitUrl : '/',
    previewUrl : '/',
   },

]

function ProjectsSection() {

  const [tag, setTag] = useState('All')
  const ref = useRef(null);
  const isInView = useInView(ref, {once : true} );
  
  const handleTagChange = (newTag) => {
       setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) => 
     project.tag.includes(tag)
  );

  const cardVariants = {
     initial : {y:50, opacity : 0},
     animate : {y:0, opacity : 1},
  }

  return (

    <section>
      
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        
        My Projects
        
      </h2>
    
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
          
         <ProjectTag 
           onClick={handleTagChange} 
           name = 'All' 
           isSelected={tag === 'All'}
          />
          
          <ProjectTag 
            onClick={handleTagChange} 
            name = 'Web' 
            isSelected={tag === 'Web'}
          />

          <ProjectTag 
            onClick={handleTagChange} 
            name = 'Mobile' 
            isSelected={tag === 'Mobile'}
          />

    </div>

    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>

      {filteredProjects.map((project, index) =>( 

      <motion.li 
        key={index}
        variants={cardVariants} 
        initial = 'initial' 
        animate={isInView ? 'animate' : 'initial'}
        transition={{duration : 0.3, delay : index * 0.4}}
        > 
        
      <ProjectCards 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
      />
      </motion.li>
      )
      
      )}
 </ul>
      
      
      
      </section>
  )
}

export default ProjectsSection