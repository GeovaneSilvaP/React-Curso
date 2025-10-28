import logo from "./logo.svg";
import "./App.css";
import { HelloWord } from "./components/HelloWord";
import { SyMyName } from "./components/SyMyName";
import { Pessoa } from "./components/Pessoa";

function App() {
  const nome = "Aurora";

  return (
    <div className="App">
      <HelloWord />
      <SyMyName nome="Geovane" />
      <SyMyName nome="Iury" />
      <SyMyName nome={nome} />
      <Pessoa
        nome="Geovane"
        idade="23"
        profissao="Programador"
        foto="https://placehold.co/150x150"
      />
    </div>
  );
}

export default App;
