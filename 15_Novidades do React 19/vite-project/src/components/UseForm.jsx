import { useState } from "react";

const UseForm = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");

    setUsers((preve) => [...preve, { name, email }]);
  };

  return (
    <div>
      <form action={handleAddUser}>
        <div>
          <input type="text" name="name" placeholder="seu nome" />
        </div>
        <div>
          <input type="email" name="email" placeholder="seu email" />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <h3>Usuários</h3>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseForm;
