import './App.css'

import Title from "./components/Title";
import Counter from "./components/Counter";

import imgPaisagem from "../src/assets/imgPaisagem.jpg";

import useCountedown from "./hooks/useCountedown";

function App() {

  const [day, hour, minute, second] = useCountedown("Jan 1, 2026 00:00:00")

  return (
    <div className='App' style={{backgroundImage: `url(${imgPaisagem})`}}>
      <div className='container'>
        <Title title="Contagem regressiva para 2026"/>
        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
