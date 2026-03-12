"use client";

import { useState } from "react";

interface TimelineEventProps {
  event: {
    date: string;
    title: string;
    key: string;
    color: string;
  };
  index: number;
  shortDesc: string;
  fullDesc: string;
}

export default function TimelineEvent({ event, index, shortDesc, fullDesc }: TimelineEventProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-center ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      <div className="w-1/2">
        {isLeft ? (
          <div 
            className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 cursor-pointer relative"
            style={{ borderColor: event.color }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center justify-between">
              <p className="text-[#636e72] text-sm flex-1">{shortDesc}</p>
              <div className="flex items-center gap-2 flex-shrink-0">
                <h3 className="text-base font-bold text-[#2d3436] whitespace-nowrap">{event.title}</h3>
                <span className="px-2 py-0.5 rounded text-white text-xs font-medium" style={{ backgroundColor: event.color }}>
                  {event.date}
                </span>
              </div>
            </div>
            {isHovered && (
              <div className="absolute z-50 left-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl p-4 border border-gray-100">
                <p className="text-[#636e72] text-sm leading-relaxed">{fullDesc}</p>
              </div>
            )}
          </div>
        ) : (
          <div 
            className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 border-r-4 cursor-pointer relative"
            style={{ borderColor: event.color }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="px-2 py-0.5 rounded text-white text-xs font-medium" style={{ backgroundColor: event.color }}>
                  {event.date}
                </span>
                <h3 className="text-base font-bold text-[#2d3436] whitespace-nowrap">{event.title}</h3>
              </div>
              <p className="text-[#636e72] text-sm flex-1 text-right">{shortDesc}</p>
            </div>
            {isHovered && (
              <div className="absolute z-50 right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl p-4 border border-gray-100">
                <p className="text-[#636e72] text-sm leading-relaxed">{fullDesc}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div 
        className="w-4 h-4 rounded-full border-4 border-white shadow-md z-10 flex-shrink-0 mx-auto cursor-pointer"
        style={{ backgroundColor: event.color }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="w-1/2" />
    </div>
  );
}
