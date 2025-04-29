import { Link } from 'react-router-dom';

export function ItemMenuContainer({ items }) {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Menu</h2>
      {items.map((item, index) => (
        <div key={index} className="menu-principal-card">
          <Link to={`/categoria/${item.tipo}`} className="menu-principal-link">
            <img src={item.platos[0]?.imagen} alt={item.tipo} className="menu-principal-img" />
            <h2 className="menu-principal-titulo">{item.tipo}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
