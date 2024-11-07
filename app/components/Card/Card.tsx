import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2">
      <img className="w-1/3 object-cover" src={imageSrc} alt={title} />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
};

export default Card;
