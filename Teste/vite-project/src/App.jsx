import './App.css'

import Form from "./components/Form";
import Fundamentos from './components/Fundamentos';
import ListaDeFrutas from "./components/ListaDeFrutas";

function App() {

  return (
    <div>
      <Form/>
      <ListaDeFrutas/>
      <Fundamentos nome="Geovane" idade={23} profissao="Programador"/>
    </div>
  )
}

export default App
