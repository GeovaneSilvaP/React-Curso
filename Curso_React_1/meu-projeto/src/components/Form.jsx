import { useState } from "react";

export function Form() {
  function userCadastrado(e) {
    e.preventDefault();
    console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);

    console.log("O usuario foi cadrastrado com sucesso!!!");
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h1>Meu Cadrastro:</h1>
      <form onSubmit={userCadastrado}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}
