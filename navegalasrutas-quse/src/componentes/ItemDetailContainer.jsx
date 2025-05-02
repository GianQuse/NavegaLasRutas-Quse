import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Skeleton from './Skeleton';
import Contador from './Contador';

export function ItemDetailContainer({ items }) {
    const { nombre } = useParams();
    const navigate = useNavigate();

    const plato = items
        .flatMap(item => item.platos)
        .find(plato => plato.nombre === nombre);

    if (!plato) {
        return (
            <Skeleton
                count={2}
                variants={[{ width: '85%', maxWidth: '370px', height: '495px' },
                { maxWidth: '120px', height: '32px', margin: '10px 0 0 0' }]}
                marginTop={20}
            />
        )
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