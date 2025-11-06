import { useState } from "react";

const ButtonNao = () => {
  const [posicao, setPosicao] = useState({ top: "0px", left: "120px" });

  function fugir() {
    const heigth = 200;
    const width = 200;

    setPosicao({
      top: Math.random() * heigth + "px",
      left: Math.random() * width + "px",
    });
  }

  return (
    <button
      id="no"
      style={{
        position: "absolute",
        top: posicao.top,
        left: posicao.left,
        transform: "0.3s",
      }}
      onMouseEnter={fugir}
    >
      Não😎
    </button>
  );
};

export default ButtonNao;
