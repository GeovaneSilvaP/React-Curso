import React from "react";

const Parte1 = ({onClick}) => {
  return (
    <div>
      <div id="parte1">
        <h1>❤️ PARA VOCÊ MEU DOCINHO DE LEITE ❤️</h1>
        <img src="/src/assets/img/kuromi.jpg" alt="" />
        <p>Você é minha labubu, minha morango do amor... teeee amoooo ❤️</p>
        <button onClick={onClick}>Clique 😏</button>
        <p>Se clicar me deve 50 milhões de beijos 😘</p>
      </div>
    </div>
  );
};

export default Parte1;
