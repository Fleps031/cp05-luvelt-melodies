import React from 'react';
import './Presentation.css';
import mulherOuvindoMusica from '../../assets/img/mulherouvindomusica.jpg';
import produzindoUsuario from "../../assets/img/produzindousuario.jpeg";

function Presentation() {
    return (
      <>
        <div className="text-center text-[#E60076] text-4xl sm:text-5xl md:text-6xl bg-white">
          <h1>Luvelt Melodies</h1>
        </div>
        <div className="flex flex-col lg:flex-row bg-white justify-center items-center px-4">
          <div className="flex flex-col m-4 gap-5 p-8 w-full sm:w-[500px] md:w-[700px] h-auto sm:h-[400px] md:h-[500px] rounded-lg card-review bg-white text-black transition-transform duration-300 ease-in-out hover:translate-y-[-4px] shadow-[0_10px_15px_#d772a6] hover:shadow-pink">
            <h1 className="text-center text-[#E60076] text-2xl sm:text-3xl">Quem somos?</h1>
            <p className="text-center text-sm sm:text-base">Desde 2025 produzimos o melhor espaço para ouvintes e artistas juntos ouvirem e criarem músicas de qualidade extrema. Nosso foco sempre foi a idealização de uma plataforma livre para novos artistas e organizada para todos! Aproveite um sistema único e inovador que promete revolucionar a forma como a música é propagada!</p>
            <div className="flex justify-center items-center bottom-5">
              <img src={mulherOuvindoMusica} alt="mulher ouvindo música" className="w-full sm:w-[300px] md:w-[350px] h-auto rounded-lg"/>
            </div>
          </div>

          <div className="flex flex-col m-4 gap-5 p-8 w-full sm:w-[500px] md:w-[700px] h-auto sm:h-[400px] md:h-[500px] rounded-lg card-review bg-white text-black transition-transform duration-300 ease-in-out hover:translate-y-[-4px] shadow-[0_10px_15px_#d772a6] hover:shadow-pink">
            <h1 className="text-center text-[#E60076] text-2xl sm:text-3xl">Por que nos escolher?</h1>
            <p className="text-center text-sm sm:text-base">Com um som único e de qualidade, nossos usuários conseguem desfrutar da real experiência de se ouvir uma música com extrema qualidade. <br /> Para artistas completamente inovadores fornecemos um sistema intuitivo e fácil para publicação de músicas, facilitando o encontro de novos artistas e seus futuros ouvintes.</p>
            <div className="flex justify-center items-center bottom-5">
            <img src={produzindoUsuario} alt="mulher ouvindo música" className="w-full sm:w-[300px] md:w-[350px] h-auto rounded-lg"/>
            </div>
          </div>
        </div>
      </>   
    );
}

export default Presentation;
