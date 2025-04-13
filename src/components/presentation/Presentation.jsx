import React from 'react';
import './Presentation.css'
import mulherOuvindoMusica from '../../assets/img/mulherouvindomusica.jpg';
import produzindoUsuario from "../../assets/img/produzindousuario.jpeg"

function Presentation() {
    return (
      <>
        <div className = "flex bg-white justify-center items-center">
        <div className = "flex flex-col m-8 gap-5 m-2.5 p-8 w-[800px] rounded-lg shadow-lg card-review h-120 bg-white text-black card-review transition-transform duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)]">
            <h1 className = "text-center">Quem somos?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis explicabo quibusdam perspiciatis sit nam sint? Temporibus sequi, quisquam eum modi possimus minus, alias molestias, quasi veritatis necessitatibus sit dicta?</p>
            <div className = "flex justify-center items-center">
              <img src={mulherOuvindoMusica} alt="mulher ouvindo música" className="w-98 rounded-lg"/>
            </div>
            
          </div>
          <div className = "flex flex-col m-8 gap-5 m-2.5 p-8 w-[800px] rounded-lg shadow-lg card-review h-120 bg-white text-black card-review transition-transform duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)]">
            <h1>Ajudando novos artistas!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi atque voluptate aspernatur ipsam molestiae adipisci aperiam illum deleniti expedita, soluta a. Necessitatibus repellat fugiat quidem molestias. Illum, quam modi?</p>
            <div className = "flex justify-center items-center">
              <img src={produzindoUsuario} alt="mulher ouvindo música" className="w-98 rounded-lg"/>
            </div>
          </div>
      
        </div>
      </>   
    )
  }
  
export default Presentation
  