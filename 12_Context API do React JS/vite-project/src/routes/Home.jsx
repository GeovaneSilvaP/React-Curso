//3 - alterando valor do contexto
// import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";

//4- refatorando com hook
import { useCounterContent } from "../hooks/useCounterContext";

const Home = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContent();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
