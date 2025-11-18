import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function submitForm(e) {
    e.preventDefault();
    alert(`Nome: ${name}\nEmail: ${email}`);
  }

  return (
    <div className="formDiv">
      <h2>Formulário Simples</h2>

      <form onSubmit={submitForm}>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome..."
        />

        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email..."
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
