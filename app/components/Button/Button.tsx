import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <button className="bg-white text-black border border-white rounded px-4 py-2 transition duration-300 ease-in-out hover:bg-transparent hover:text-white">
        {text}
      </button>
    </Link>
  );
};

export default Button;
