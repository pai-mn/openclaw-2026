"use client";

import * as LucideIcons from "lucide-react";

interface IssueCardProps {
  issue: {
    title: string;
    icon: string;
    desc: string;
  };
}

export default function IssueCard({ issue }: IssueCardProps) {
  const IconComponent = (LucideIcons as any)[issue.icon] || LucideIcons.AlertCircle;

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-[#ff6b6b]">
          <IconComponent size={32} strokeWidth={2} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#2d3436] mb-2">{issue.title}</h3>
          <p className="text-[#636e72] text-sm leading-relaxed">{issue.desc}</p>
        </div>
      </div>
    </div>
  );
}
