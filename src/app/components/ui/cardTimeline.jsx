"use client";
import { cn } from "../../lib/utils";

export function CardDemo({ card }) {
  return (
    <div className="max-w-xl mx-5 group/card transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
      <div
        className={cn(
          "bg-gradient-to-b from-black to-red-950 cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]", // Added transition
          "group-hover/card:scale-105 group-hover/card:-translate-y-2" // Hover effects
        )}
        style={{ willChange: 'transform' }} // Optimize animations
      >
        <div className="absolute inset-0 transition-all duration-300 group-hover/card:bg-black/30 z-0"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {card.year}
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {card.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {card.content}
          </p>
        </div>
      </div>
    </div>
  );
}