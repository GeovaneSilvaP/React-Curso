import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Footer from "./components/Footer";
import styles from "./pages/NavBar.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function AppRoutes() {
    return(
        <Router>
      <ul className={styles.list}>
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}><Link to="/empresa">Empresa</Link></li>
        <li className={styles.item}><Link to="/contato">Contato</Link></li>
      </ul>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </Router>
    )
}

export default AppRoutes;