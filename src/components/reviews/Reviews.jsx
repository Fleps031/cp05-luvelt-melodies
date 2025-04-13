import React from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import '../reviews/Reviews.css';

const Reviews = () => {
  return (
    <div className="bg-white">      
        {/* Seção de Depoimentos (Reviews) */}
        <section id="reviews" className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Depoimentos</h2>
            <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-3">
              {}
              <div className="card-review bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"Melodia revolucionou minha maneira de ouvir música! Incrível e intuitivo."</p>
                <div className="flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Usuário"/>
                  <div className="ml-4">
                    <p className="text-gray-800 font-bold">João Silva</p>
                    <p className="text-gray-500 text-sm">Músico</p>
                  </div>
                </div>
              </div>
              {}
              <div className="card-review bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"Interface limpa, fácil de usar e com uma sonoridade impecável."</p>
                <div className="flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/50.jpg" alt="Usuária"/>
                  <div className="ml-4">
                    <p className="text-gray-800 font-bold">Maria Oliveira</p>
                    <p className="text-gray-500 text-sm">DJ</p>
                  </div>
                </div>
              </div>
              {}
              <div className="card-review bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"O melhor app para descobrir novas playlists e artistas emergentes."</p>
                <div className="flex items-center">
                  <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Usuário"/>
                  <div className="ml-4">
                    <p className="text-gray-800 font-bold">Carlos Pereira</p>
                    <p className="text-gray-500 text-sm">Entusiasta de música</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>      
    </div>
  );
};

export default Reviews;
