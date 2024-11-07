"use client";

import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';

interface BannerProps {
  imageUrl: string;
  title: string;
  description: string;
  buttons: { text: string; href: string }[];
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title, description, buttons }) => {
  return (
    <div className="relative w-full h-96 md:h-screen ">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="w-full h-full banner-image" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="mb-6 text-xl md:text-3xl">{description}</p>
        <div className="flex space-x-4">
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} href={button.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
