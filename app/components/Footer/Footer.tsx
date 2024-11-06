"use client";

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2024 MTCode Technology. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <p className="text-center md:text-left">Confira nosso repositório:</p>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
