import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Container customClass="min-heigth"><Home /></Container>}></Route>
        <Route path="/projects" element={<Container customClass="min-heigth"><Projects /></Container>}></Route>
        <Route path="/newprojects" element={<Container customClass="min-heigth"><NewProject /></Container>}></Route>
        <Route path="/company" element={<Container customClass="min-heigth"><Company /></Container>}></Route>
        <Route path="/contact" element={<Container customClass="min-heigth"><Contact /></Container>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
