import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';

export function ItemMenuContainer({ items }) {
  const isLoading = !items || items.length === 0;

  return (
    <div className="menu-container">
      <h2 className="menu-title">Menu</h2>

      {isLoading ? (
        <Skeleton
          count={5}
          variants={[
            { height: '100px', borderRadius: '30px' },
            { height: '100px', borderRadius: '30px' },
            { height: '100px', borderRadius: '30px' },
            { height: '100px', borderRadius: '30px' },
            { height: '100px', borderRadius: '30px' },
          ]}
        />
      ) : (
        items.map((item, index) => (
          <div key={index} className="menu-principal-card">
            <Link to={`/categoria/${item.tipo}`} className="menu-principal-link">
              <img src={item.platos[0]?.imagen} alt={item.tipo} className="menu-principal-img" />
              <h2 className="menu-principal-titulo">{item.tipo}</h2>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

