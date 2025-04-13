import React from 'react';
import './Presentation.css'
import mulherOuvindoMusica from '../../assets/img/mulherouvindomusica.jpg';

function Presentation() {
    return (
      <>
        <div className = "flex">
          <div className = "flex flex-col m-8 gap-5">
            <h1>Quem somos?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis explicabo quibusdam perspiciatis sit nam sint? Temporibus sequi, quisquam eum modi possimus minus, alias molestias, quasi veritatis necessitatibus sit dicta?</p>
            <img src={mulherOuvindoMusica} alt="mulher ouvindo música" className = "w-98 "/>
          </div>
          <div>
            <h1>Ajudando novos artistas!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi atque voluptate aspernatur ipsam molestiae adipisci aperiam illum deleniti expedita, soluta a. Necessitatibus repellat fugiat quidem molestias. Illum, quam modi?</p>

          </div>
      
        </div>
      </>   
    )
  }
  
export default Presentation
  