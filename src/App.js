import NavBar from './componentes/Navbar/NavBar';
import SectionOne from './componentes/SectionOne/SectionOne';
import SectionTwo from './componentes/SegundaSessao/SegundaSessao'
import TerceiraSection from './componentes/TerceiraSection/TerceiraSection';
import QuartSessao from './componentes/QuartaSessao/QuartaSessao';
import Contas from './componentes/contas/Contas';
import Footer from './componentes/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <NavBar/>
          <SectionOne/>
          <SectionTwo/>
          <TerceiraSection/>
          <QuartSessao/>
          <Contas/>
          <Footer/>
      </header>
    </div>
  );
}

export default App;
