import React, { useState } from 'react';
import Logo from '../../assets/Logo.svg';  

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
        <a href="#">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
        </a>
        </div>
        {/* Menu para telas maiores */}
        <nav className="hidden md:flex space-x-4 gap-8">
          <a href="#" className="text-gray-900 hover:text-pink-500">Home</a>
          <a href="#reviews" className="text-gray-900 hover:text-pink-500">Depoimentos</a>
          <a href="#" className="text-gray-900 hover:text-pink-500">Sobre</a>
          <a href="#" className="text-gray-900 hover:text-pink-500">Contato</a>
        </nav>
        {/* Botão de call-to-action para desktop */}
        <div className="hidden md:block">
          <a href="#"
             className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition">
            Ouvir Agora
          </a>
        </div>
        {/* Botão do menu mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            type="button" 
            className="text-gray-300 hover:text-pink-500 focus:outline-none focus:text-pink-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-900 hover:text-pink-500">Home</a>
            <a href="#reviews" className="block text-gray-900 hover:text-pink-500">Depoimentos</a>
            <a href="#" className="block text-gray-900 hover:text-pink-500">Sobre</a>
            <a href="#" className="block text-gray-900 hover:text-pink-500">Contato</a>
            <a href="#"
               className="block bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition">
              Ouvir Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

  