'use client'

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
   {
     title : 'Skills',
     id: 'skills',
     content : (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongoose</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
     )
   },
   {
    title : 'Education',
    id: 'education',
    content : (
     <ul className='list-disc pl-2'>
       <li>MERN STACK</li>
       <li>Chouksey Engineering College</li>
        
     </ul>
    )
  },

  {
    title : 'Certifications',
    id: 'certifications',
    content : (
     <ul className='list-disc pl-2'>
       <li>Machine Learning with Python</li>
       <li>Build Responsive Real-World Websites with HTML and CSS</li>
        
     </ul>
    )
  }
]

function AboutSection() {

  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
     startTransition(() => {
       setTab(id);
     })
  }

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
            <Image src='/images/about-me-3.jpg' width={500} height={500} alt='about me'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>

                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>

                <p className='text-base lg:text-lg'>

                Hello there! I’m Ankit Jha, an aspiring software engineer currently pursuing my B.Tech at Chouksey Engineering College in Bilaspur. My academic and hands-on journey in Computer Networks, DBMS, and especially in Full Stack Development, has shaped my approach to technology – making it accessible and effective for all users.

                </p>

         <div className='flex flex-row justify-start mt-8'>


                  <TabButton 
                  selectTab={() =>handleTabChange('skills')} 
                  active = {tab === 'skills'}>

                      Skills  

                  </TabButton>


                  <TabButton selectTab={() =>handleTabChange('education')} 
                  active = {tab === 'education'}>
                    
                           Education 
                    
                    </TabButton>



                  <TabButton selectTab={() => handleTabChange('certifications')} 
                      active = {tab === 'certifications'}>

                         Certifications 
                    
                    </TabButton>

                    <div className='mt-8'>
                          {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                   </div>
            </div>
      </div>

    </section>
  )
}

export default AboutSection