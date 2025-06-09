'use client'
import React from 'react'
import { BackgroundBeams } from "./ui/background-beams";
import { IoArrowDownCircleOutline } from "react-icons/io5";

function HeroSection({ title, content }: any) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg text-neutral-300 md:text-xl">
            {content}
          </p>
        </div>
      </div>

      {/* Arrow positioned at bottom-center of screen */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <IoArrowDownCircleOutline className="text-4xl text-white animate-bounce" />
      </div>

      {/* Background Beams */}
      <BackgroundBeams className="z-0" />
    </div>
  )
}

export default HeroSection