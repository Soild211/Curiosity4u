import React from 'react';

const Timeline = ({ items }) => {
  return (
    <section className="timeline overflow-x-hidden whitespace-nowrap py-12">
      <ol className="flex transition-all duration-1000">
        {items.map((item, index) => (
          <li
            key={index}
            className={`relative inline-block list-none ${
              index === items.length - 1 ? 'w-[280px]' : 'w-[160px]'
            } ${index !== 0 ? 'ml-3.5' : ''}`}
          >
            <div className="absolute left-[calc(100%+7px)] w-[280px] p-4 text-base text-black bg-white whitespace-normal">
              <time className="block text-lg font-bold mb-2">{item.year}</time>
              <p>{item.description}</p>
            </div>
            {index !== items.length - 1 && (
              <div className="absolute top-1/2 left-[calc(100%+1px)] w-3 h-3 bg-[#f45b69] rounded-full transform -translate-y-1/2"></div>
            )}
          </li>
        ))}
      </ol>
      <div className="arrows flex justify-center mb-5">
        <button className="arrow__prev disabled opacity-50" disabled>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg"
            alt="prev timeline arrow"
            className="w-11 h-11"
          />
        </button>
        <button className="arrow__next ml-5">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg"
            alt="next timeline arrow"
            className="w-11 h-11"
          />
        </button>
      </div>
    </section>
  );
};

export default Timeline;