import './App.css'
import { Outlet } from "react-router-dom";
//5- linki entre paginas
import NaveBar from "./components/NaveBar";

function App() {
 

  return (
    <div className='App'>
        <NaveBar/>
        <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
