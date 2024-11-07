"use client";

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2024 MTCode Tecnologia. Todos os direitos reservados.</p>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
