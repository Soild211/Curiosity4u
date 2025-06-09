import React from 'react'
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import { founders } from '../data/founders';
import { AnimatedTestimonials } from './foundersComp';

export const Founders = () => {
  return (
    <>
    {/* <ShootingStars /> */}
    {/* <StarsBackground/> */}
    
    <div className ='flex flex-col justify-center items-center gap-10 w-full min-h-screen bg-gradient-to-b from-black via-red-950 to-black'>
    <h1 className= 'text-4xl text-center'>
      Founders
    </h1> 
    <div className='  justify-center items-center'>
        <AnimatedTestimonials testimonials={founders} autoplay={true} />
    </div>
    </div>
    </>
  )
}

export default Founders;