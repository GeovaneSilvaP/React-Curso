import { useState } from "react";
import Parte1 from "./components/Parte1";
import Parte2 from "./components/Parte2";
import "./App.css";

function App() {
  const [mostraSegundaParte, setMostraSegundaParte] = useState(false);

  return (
    <div className="container">
      {!mostraSegundaParte ? (
        <Parte1 onClick={() => setMostraSegundaParte(true)}/>
      ) : (
        <Parte2/>
      )}
    </div>
  );
}

export default App;
