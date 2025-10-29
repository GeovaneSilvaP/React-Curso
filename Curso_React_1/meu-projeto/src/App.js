import logo from "./logo.svg";
import "./App.css";
import { HelloWord } from "./components/HelloWord";
import { Pessoa } from "./components/Pessoa";
import { Frase } from "./components/Frase";
import { SuaCidade } from "./components/Teste";
import { SyMayName } from "./components/SyMayName";
import { List } from "./components/List";
import { Evento } from "./components/Evento";
import { Form } from "./components/Form";

function App() {
  const nome = "Aurora";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <HelloWord />
      <SyMayName nome="Geovane"/>
      <SyMayName aula="React"/>
      <SyMayName nome={nome}/>
      <Pessoa
        nome="Geovane"
        idade="23"
        profissao="Programador"
        foto="https://placehold.co/150x150"
      />
      <SuaCidade
      cidade="Cajari"
      numero="188"
      estado="Maranhão"
      rua="Clodomir Serejo"/>
      <List />
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form/>
    </div>
  );
}

export default App;
