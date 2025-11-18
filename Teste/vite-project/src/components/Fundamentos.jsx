import { useState } from "react";

const Fundamentos = ({ nome, idade, profissao }) => {
  const [contador, setContador] = useState(0);
  const [meuInput, setMeuInput] = useState("");

  const animes = [
    { id: 1, nome: "Naruto" },
    { id: 2, nome: "Dragon Ball" },
  ];

  function contagem() {
    setContador(contador + 1);
  }

  const nomes = [
    { id: 1, name: "Geovane", idade: 23 },
    { id: 2, name: "Aurora", idade: 15 },
    { id: 3, name: "Chyst", idade: 19 },
    { id: 4, name: "Renta", idade: 25 },
    { id: 5, name: "Iury", idade: 25 },
  ];

  return (
    <div>
      <h2>Fundamentos</h2>
      {/*Pilares do React JS */}
      <p>{contador}</p>
      <button onClick={contagem}>Adicionar</button>

      <div>
        <h2>Suas informações</h2>
        <h3>
          Seja bem vindo {nome}!... Você tem {idade} anos e é um {profissao}
        </h3>
      </div>

      <div>
        <h2>Meu input</h2>
        <input
          type="text"
          value={meuInput}
          placeholder="Digite alguma coisa"
          onChange={(e) => setMeuInput(e.target.value)}
        />
        <p>{meuInput}</p>
      </div>

      <div>
        <h1>Anime</h1>

        <ul>
          {animes.map((anime) => (
            <li key={anime.id}>{anime.nome}</li>
          ))}
        </ul>
      </div>

      <div>Renderizando</div>
      {nomes.filter((n)=> n.idade > 20).length > 0 ? (
        <ul>
          {nomes.map((nome) => (
            <li key={nome.id}>{nome.name}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado...</p>
      )}
    </div>
  );
};

export default Fundamentos;
