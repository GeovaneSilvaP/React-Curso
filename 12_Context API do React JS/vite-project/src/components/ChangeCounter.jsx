import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

//4- refatorando com hook
import { useCounterContent } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useCounterContent();
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};

export default ChangeCounter;
