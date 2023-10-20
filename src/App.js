import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/Navbar/NavBar';
import Tudo from './Pages/Tudo'
import Footer from './componentes/Footer/Footer';
import Login from './Pages/Login';
import './App.css';
import Registro from './Pages/Registro';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Tudo />} />
          <Route path='Login' element={<Login />} />
          <Route path='Registro' element={<Registro />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
