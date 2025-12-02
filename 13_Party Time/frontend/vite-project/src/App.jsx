import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
