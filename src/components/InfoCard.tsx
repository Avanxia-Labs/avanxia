// src/components/layout/InfoCard.tsx
import React from 'react';

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => {
  return (
    <div className="glass-panel relative w-full p-8 md:p-10 flex flex-col">
      <h4 className="text-xl md:text-2xl font-semibold mb-3">{title}</h4>
      <p className="opacity-90 leading-relaxed">{text}</p>
    </div>
  );
};

export default InfoCard;
