
import React from 'react';

const Footer = () => (
  <footer className="bg-black text-gray-300 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p>&copy; 2025 Melodia. Todos os direitos reservados.</p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-pink-500"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-pink-500"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-pink-500"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
