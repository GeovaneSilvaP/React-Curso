import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Newproject from "./components/pages/NewProject";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>

      <Routes>
        <Route path="/" element={<Container customClass="min-heigth"><Home /></Container>}></Route>
        <Route path="/company" element={<Container customClass="min-heigth"><Company /></Container>}></Route>
        <Route path="/contact" element={<Container customClass="min-heigth"><Contact /></Container>}></Route>
        <Route path="/newproject" element={<Container customClass="min-heigth"><Newproject /></Container>}></Route>
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
