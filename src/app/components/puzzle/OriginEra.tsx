"use client";

interface OriginEraProps {
  eraData: {
    date: string;
    color: string;
  };
  era: {
    title: string;
    desc: string;
  };
}

export default function OriginEra({ eraData, era }: OriginEraProps) {
  return (
    <div className="flex flex-col items-center w-1/5 px-2">
      <div 
        className="w-10 h-10 rounded-full border-4 border-white shadow-lg z-10 mb-4"
        style={{ backgroundColor: eraData.color }}
      />
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md w-full">
        <div className="text-center mb-2">
          <span className="px-2 py-0.5 rounded text-white text-xs font-medium" style={{ backgroundColor: eraData.color }}>
            {eraData.date}
          </span>
        </div>
        <h3 className="text-base font-bold text-[#2d3436] text-center mb-1">{era.title}</h3>
        <p className="text-[#636e72] text-xs leading-relaxed text-center">{era.desc}</p>
      </div>
    </div>
  );
}
