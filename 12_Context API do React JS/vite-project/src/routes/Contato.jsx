import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

//4- refatorando com hook
import { useCounterContent } from "../hooks/useCounterContext";

const Contato = () => {
  const { counter } = useCounterContent();

  return (
    <div>
      <h1>Contato</h1>
      <p>Valor do counter: {counter}</p>
    </div>
  );
};

export default Contato;
