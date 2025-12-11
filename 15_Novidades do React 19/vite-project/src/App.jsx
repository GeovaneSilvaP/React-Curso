import './App.css'
import UseForm from "./components/UseForm";
import ParentComponent from "./components/ParentComponent";
import Posts from "./components/PostItem";
import {ThemaProvider} from "./context/ThemeContext";
import BotaoDeTheme from './components/BotaoDeTheme';
import FormStatus from "./components/FormStatus";
import EstadoDoFormulario from './components/EstadoDoFormulario';
import MessagemApp from './components/MessagemApp';

function App() {

  return (
    <>
    {/*Meta tags no JSX */}
    <title>Novidades do React 19</title>
    <meta name="description" content="Aprendendo Novidades do React 19" />

    {/*Actions do React 19 */}
    <h1>1- Actions</h1>
    <UseForm />

    {/*ref como prop */}
    <h1>2- Ref como Prop</h1>
    <ParentComponent />

    {/*use para carregar dados */}
    <h1>3- use para carregar dados</h1>
    <Posts />

    {/*Utilizando contextos com use */}
    <h1>4- Utilizando contextos com use</h1>
    <ThemaProvider>
      <BotaoDeTheme />
    </ThemaProvider>

    {/*Hook useFormStatus */}
    <h1>5- Hook useFormStatus</h1>
    <FormStatus />

    {/*Hook useFormState */}
    <h1>6- Hook useFormState</h1>
    <EstadoDoFormulario />

    {/*Hook useOptimistic */}
    <h1>7- Hook useOptimistic</h1>
    <MessagemApp />
    </>
  )
}

export default App
