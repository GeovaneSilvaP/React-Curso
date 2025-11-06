import { useState  } from "react";
import ButtonNao  from "./ButtonNao";

const Parte2 = () => {

    const [mensagem, setMensagem] = useState("");

    function handleSim() {
        setMensagem("Hehe, eu sabia! 😍💖");
        setTimeout(()=> window.open("https://youtu.be/GC5Ecs5iIrc?si=Axww-4NBnzb9XuSO"),800)
    }

  return (
    <div id="parte2">
        <div className="card">
            <h1>Vai me mostrar o Tetê hoje??😏🫦</h1>
            <img src="/src/assets/img/paixao.webp" alt="" />

            <div className="botoes">
                <button onClick={handleSim}>Sim🫢</button>
                <ButtonNao/>
            </div>

            {mensagem && <p className="mensagem">{mensagem}</p>}
        </div>
    </div>
  )
}

export default Parte2