
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Frota from './pages/Frota';

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4 mb-5 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frota" element={<Frota />} />
        </Routes>
      </div>
      <footer className="py-4 mt-auto border-top border-secondary text-center text-secondary">
        <div className="container">
          <small>&copy; 2026 FrotaCONF Premium. Todos os direitos reservados.</small>
        </div>
      </footer>
    </>
  );
}

export default App;
