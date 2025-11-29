import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

//4- refatorando com hook
import { useCounterContent } from "../hooks/useCounterContext";

//5 contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contato = () => {
  const { counter } = useCounterContent();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>Contato</h1>
      <p>Valor do counter: {counter}</p>
    </div>
  );
};

export default Contato;
