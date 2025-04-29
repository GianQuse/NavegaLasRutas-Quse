import { useParams, Link } from 'react-router-dom';

export function ItemListContainer({ items }) {
    const { categoria } = useParams();

    const platosCategoria = items
        .find(item => item.tipo === categoria)
        ?.platos;

    if (!platosCategoria) {
        return <p>Cargando plato...</p>;
    }

    return (
        <div className="todos-platos-lista">
            <h2 className="menu-title">{categoria}</h2>
            {platosCategoria.map((plato, index) => (
                <Link to={`/detail/${plato.nombre}`} key={index} className="menu-principal-link">
                    <div className="plato-detalle">
                        <div className='plato-detalle-texto'>
                            <span className="nombre-plato">{plato.nombre}</span>
                            <span className="descripcion-plato">{plato.descripcion}</span>
                        </div>
                        <span className="precio-plato">${plato.precio[0]}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}