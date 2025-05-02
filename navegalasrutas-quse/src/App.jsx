import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ItemMenuContainer } from './componentes/ItemMenuContainer.jsx';
import { ItemListContainer } from './componentes/ItemListContainer.jsx';
import { ItemDetailContainer } from './componentes/ItemDetailContainer.jsx';
import { useApi } from './hooks/useApi.js';
import './style.css';
import { NavBar } from './componentes/NavBar.jsx';
import { BotonPrincipal } from './componentes/BotonPrincipal.jsx';
import { Footer } from './componentes/Footer.jsx';
import FloatingCart from './componentes/FloatingCart.jsx';

function App() {
  const api = useApi();

  return (
    <Router>
      <div className='contenedorPrincipal'>
        <NavBar />
        <BotonPrincipal/>
        <Routes>
          <Route path="/" element={<ItemMenuContainer items={api} />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer items={api} />} />
          <Route path="/detail/:nombre" element={<ItemDetailContainer items={api} />} />
        </Routes>
        <FloatingCart itemCount={3} onClick={()=> alert("ABRIR CARRITO")}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;