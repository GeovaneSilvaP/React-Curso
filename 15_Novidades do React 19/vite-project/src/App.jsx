import './App.css'
import UseForm from "./components/UseForm";
import ParentComponent from "./components/ParentComponent";
import Posts from "./components/PostItem";
import {ThemaProvider} from "./context/ThemeContext";
import BotaoDeTheme from './components/BotaoDeTheme';

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
    </>
  )
}

export default App
