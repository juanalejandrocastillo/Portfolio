import './App.css';
import About from './componentes/About';
import Cover from './componentes/Cover';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';
import Proyectos from './componentes/Proyectos';
import Skills from './componentes/Skills';
import Contacto from './componentes/Contacto';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <About />
      <Skills />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}
export default App;
