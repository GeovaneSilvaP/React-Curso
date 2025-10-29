import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { HelloWord } from "./components/HelloWord";
import { Pessoa } from "./components/Pessoa";
import { Frase } from "./components/Frase";
import { SuaCidade } from "./components/Teste";
import { SyMayName } from "./components/SyMayName";
import { List } from "./components/List";
import { Evento } from "./components/Evento";
import { Form } from "./components/Form";
import { Condicional } from "./components/CondicionalIf/Condicional";
import { OutrasListas } from "./components/Listas/OutrasListas";
import { SeuNome } from "./components/StateLift/SeuNome";
import { Saudacao } from "./components/StateLift/Saudacao";

function App() {

  const nome = "Aurora";

  const meusItems = ["React", "Vue", "Angular"];

  const [seuNome, setNome] = useState();

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

      <h1>Renderizção Condicional</h1>
      <Condicional/>

      <h1>Renderizção De Listas</h1>
      <OutrasListas itens={meusItems}/>

      <h1>Renderizção De Listas - 2</h1>
      <OutrasListas itens={[]}/>

      <h1>Curso React: State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao seuNome={seuNome}/>
    </div>
  );
}

export default App;
