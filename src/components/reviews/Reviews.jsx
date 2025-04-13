import React from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import '../reviews/Reviews.css';

const Reviews = () => {
  return (
    <div className="min-h-screen bg-white">
    <div className="pt-20"></div>
      
      <main>
        {/* Seção Hero */}
        <section className="py-12 bg-gray-200 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800">Melodia: Sua Música, Sua Forma</h1>
            <p className="mt-4 text-gray-600">Descubra uma nova forma de curtir as melhores playlists e artistas!</p>
            <a href="#"
              className="mt-6 inline-block bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition">
              Ouvir Agora
            </a>
          </div>
        </section>
        
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
      </main>
      

    </div>
  );
};

export default Reviews;
