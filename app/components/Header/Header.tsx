"use client";
import Button from '../Button/Button';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; // Ajuste este valor conforme necessário
      if (scrollPosition > threshold) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full p-4 z-50 ${isDark ? 'header-dark' : 'bg-transparent backdrop-blur-md'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="../../img/logo.png" alt="MTCode Tecnologia" width={200} height={80} />
          </Link>
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
          <Link href="/" className="text-white hover:text-gray-400">
            Início
          </Link>
          <Link href="/About" className="text-white hover:text-gray-400">
            Sobre
          </Link>
          <Link href="/Projects" className="text-white hover:text-gray-400">
            Projetos
          </Link>
          <Link href="/Contact" className="text-white hover:text-gray-400">
            Contato
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaWhatsapp />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col items-center space-y-2 mt-4">
          <Link href="/" className="text-white hover:text-gray-400">
            Início
          </Link>
          <Link href="/About" className="text-white hover:text-gray-400">
            Sobre
          </Link>
          <Link href="/Projects" className="text-white hover:text-gray-400">
            Projetos
          </Link>
          <Link href="/Contact" className="text-white hover:text-gray-400">
            Contato
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaWhatsapp />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedin />
            </Link>
          </div>
          <Button text="Fazer Orçamento" href="https://www.google.com" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
