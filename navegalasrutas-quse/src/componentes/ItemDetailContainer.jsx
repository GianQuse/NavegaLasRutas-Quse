import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Contador from './Contador';

export function ItemDetailContainer({ items }) {
    const { nombre } = useParams();
    const navigate = useNavigate();

    const plato = items
        .flatMap(item => item.platos)
        .find(plato => plato.nombre === nombre);

    if (!plato) {
        return <p>Cargando plato...</p>;
    }

    return (
        <>
            <div className='contenedor-plato'>
                <div className="plato-card">
                    <img src={plato.imagen} alt={plato.nombre} className="plato-img" />
                    <div className="plato-info">
                        <h3 className="plato-nombre">{plato.nombre}</h3>
                        <h4 className="plato-descripcion">{plato.descripcion}</h4>
                        {plato.precio.map((precio, index) => (
                            <p key={index} className="plato-precio">${precio}</p>
                        ))}
                    </div>
                    <Contador />
                </div>
                <button className='plato-button' onClick={() => navigate(-1)}>Volver atrás</button>
            </div>
        </>
    );
}