import { useState } from "react";

const ListaDeFrutas = () => {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState();

  const handleNovoItemChange = (e) => {
    setNovoItem(e.target.value);
  };

  const adicionarItem = () => {
    if (novoItem.trim() === "") return;
    setItens([...itens, novoItem]);
    setNovoItem("");
  };

  const removerItem = (index) => {
    const novaLista = itens.filter((_, i)=> i !== index);
    setItens(novaLista)
  }

  return (
    <div className="listaFrutas">
      <h2>Lista de Frutas</h2>

      <input
        type="text"
        value={novoItem}
        placeholder="Digite uma fruta"
        onChange={handleNovoItemChange}
      />

      <button onClick={adicionarItem}>Adicionar</button>
      <ul>
        {itens.map((item, index)=> (
            <li key={index}>{item} <button onClick={() => removerItem(index)}>X</button></li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeFrutas;
