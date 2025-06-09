"use client";
import React from 'react';
import drone from '../images/AutonomusDrone.jpg'

function Cards({ imgUrl, title, desc }: any) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={`cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4 `}
        style={{ backgroundImage: `url(
          ${imgUrl}
          )`, backgroundSize: 'cover', backgroundPosition:'center' }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
