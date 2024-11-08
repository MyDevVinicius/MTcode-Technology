"use client";

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

  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-50 bg-white font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="../../img/logo.png" alt="MTCode Tecnologia" width={200} height={80} />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-8 h-8" // Aumentando o tamanho do ícone do menu
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
          <Link href="/" className="text-orange-500 hover:text-orange-700 font-semibold">
            Início
          </Link>
          <Link href="/About" className="text-cyan-500 hover:text-cyan-700 font-semibold">
            Sobre
          </Link>
          <Link href="/Projects" className="text-blue-500 hover:text-blue-700 font-semibold">
            Projetos
          </Link>
          <Link href="/Contact" className="text-orange-500 hover:text-orange-700 font-semibold">
            Contato
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 font-semibold">
            <FaInstagram className="w-6 h-6" /> {/* Aumentando o tamanho do ícone */}
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-700 font-semibold">
            <FaWhatsapp className="w-6 h-6" /> {/* Aumentando o tamanho do ícone */}
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-semibold">
            <FaLinkedin className="w-6 h-6" /> {/* Aumentando o tamanho do ícone */}
          </Link>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col items-center space-y-2 mt-4">
          <Link href="/" className="text-orange-500 hover:text-orange-700 font-semibold">
            Início
          </Link>
          <Link href="/About" className="text-cyan-500 hover:text-cyan-700 font-semibold">
            Sobre
          </Link>
          <Link href="/Projects" className="text-blue-500 hover:text-blue-700 font-semibold">
            Projetos
          </Link>
          <Link href={"/Contact"} className="text-orange-500 hover:text-orange-700 font-semibold">
            Contato
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 font-semibold">
              <FaInstagram className="w-8 h-8" /> {/* Aumentando o tamanho do ícone */}
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-700 font-semibold">
              <FaWhatsapp className="w-8 h-8" /> {/* Aumentando o tamanho do ícone */}
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-semibold">
              <FaLinkedin className="w-8 h-8" /> {/* Aumentando o tamanho do ícone */}
            </Link>
          </div>
          <button
            className="mt-4 px-4 py-2 text-white font-semibold rounded-lg transition-colors duration-300"
            style={{
              background: 'linear-gradient(90deg, #FF7E5F, #00C9FF, #0052D4)',
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.color = 'transparent';
              e.currentTarget.style.backgroundClip = 'text';
              e.currentTarget.style.webkitBackgroundClip = 'text';
              e.currentTarget.style.webkitTextFillColor = 'transparent';
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, #FF7E5F, #00C9FF, #0052D4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.backgroundClip = 'padding-box';
              e.currentTarget.style.webkitBackgroundClip = 'padding-box';
              e.currentTarget.style.webkitTextFillColor = 'white';
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, #FF7E5F, #00C9FF, #0052D4)';
            }}
            onClick={scrollToForm}
          >
            Fazer Orçamento
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
