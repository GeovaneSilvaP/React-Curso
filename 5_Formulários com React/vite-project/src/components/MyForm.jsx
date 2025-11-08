import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, email, textarea, select);

    //validacao
    //envio

    //7- limpar form
    setName("");
    setEmail("");
    setTextarea("");
    setSelect("");
  }

  return (
    <div>
      {/*1- criação de form */}
      {/*5- envio de formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Dogite o seu nome"
            onChange={handleName}
            //6- controlled input
            value={name}
          />
        </div>
        {/*2- Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            //4 - simplificando manipulaçao
            onChange={(e) => setEmail(e.target.value)}
            //6- controlled input
            value={email}
          />
        </label>
        {/*8- textarea */}
        <span>Bio:</span>
        <textarea
          name="bio"
          placeholder="Descrição do usuário"
          onChange={(e) => setTextarea(e.target.value)}
          value={textarea}
        ></textarea>
        {/*9- select */}
        <label>
          <span>Função do sistema</span>
          <select
            name="role"
            onChange={(e) => setSelect(e.target.value)}
            value={select}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
