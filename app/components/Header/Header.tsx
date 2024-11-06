"use client";

import Link from 'next/link';
import { FaInstagram, FaLinkedin ,FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MTCode Technology</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex md:flex-grow md:justify-center md:space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Início
          </Link>
          <Link href="/About" className="hover:text-gray-400">
            Sobre 
          </Link>
          <Link href="/Projects" className="hover:text-gray-400">
            Projetos
          </Link>
          <Link href="/Contact" className="hover:text-gray-400">
            Contato
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col items-center space-y-2 mt-4">
          <Link href="/" className="hover:text-gray-400">
            Início
          </Link>
          <Link href="/About" className="hover:text-gray-400">
            Sobre 
          </Link>
          <Link href="/Projects" className="hover:text-gray-400">
            Projetos
          </Link>
          <Link href="/Contact" className="hover:text-gray-400">
            Contato
          </Link>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
