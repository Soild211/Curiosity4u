import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdDownload } from 'react-icons/io'

function AboutUsP({ description, url, btnTitle, btnUrl }: any) {
  return (
    <div 
      className="h-[65rem] w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-gradient-to-b from-black via-red-950 to-black " 
      id='aboutUs'
    >
      <h1 className='sm:text-5xl text-4xl font-bold'>About Us</h1>
      <div className='flex flex-col-reverse md:flex-row self-center justify-around align-middle mt-4 p-5'>
        <div className="md:w-1/3 p-8 text-justify flex flex-col">
          {/* Increased text size for description */}
          <p className="text-xl">{description}</p>
          {btnTitle && (
            <div className="mt-4">
              <a 
                href={"/pravi.pdf"} 
                rel="noopener noreferrer" 
                target="_blank" 
                className="flex items-center gap-2 bg-white text-black py-2 px-4 rounded transition transform hover:-translate-y-1 hover:scale-105"
              >
                <IoMdDownload /> {btnTitle}
              </a>
            </div>
          )}
        </div>
  
        <div className="flex flex-col justify-center items-center">
          <Image src={url} alt="About Us Image" className='rounded-xl w-3/4' />
        </div>
      </div>
    </div>
  )
}

export default AboutUsP
