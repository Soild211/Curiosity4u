import React from 'react'
import Cards from './Cards'
import Image from 'next/image'

import workshop1 from "../images/pccoer1.jpg"
import workshop2 from "../images/pccoer2.jpg"
import workshop3 from "../images/pccoer3.jpg"
import workshop4 from "../images/our workshops.png"
import workshop5 from "../images/12.png"
import workshop6 from "../images/13.png"

function Projects() {
  return (
    <div 
      className="w-full relative flex flex-col items-center justify-center sm:overflow-hidden bg-gradient-to-b from-black to-red-950  pt-10" 
      id='Projects'
    >
      <h1 className='text-center text-3xl font-semibold'>Glimpse Of Workshops</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 relative top-3 mb-8'>
        <Image src={workshop1} alt="" width={350} height={350} className='rounded-xl' />
        <Image src={workshop2} alt="" width={350} height={350} className='rounded-xl' />
        <Image src={workshop3} alt="" width={350} height={350} className='rounded-xl' />
        <Image src={workshop4} alt="" width={350} height={350} className='rounded-xl'/>
        <Image src={workshop5} alt="" width={350} height={350} className='rounded-xl'/>
        <Image src={workshop6} alt="" width={350} height={350} className='rounded-xl'/>
      </div>
    </div>
  )
}

export default Projects
