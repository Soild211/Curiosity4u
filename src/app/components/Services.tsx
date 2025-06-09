'use client'
import { HoverEffect } from "./ui/card-hover-effect.tsx";

function CardHoverEffectDemo({ array, Heading }: any) {
  return (
    <div
      id="Services"
      className="w-full relative flex flex-col items-center justify-center bg-gradient-to-b from-black to-red-950 min-h-screen py-12 px-4"
    >
      <h1 className="text-center text-4xl font-bold text-white mb-8">{Heading}</h1>
      <div className="max-w-6xl w-full mx-auto">
        <HoverEffect items={array} />
      </div>
    </div>
  );
}

export default CardHoverEffectDemo;