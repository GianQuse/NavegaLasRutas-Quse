import { useParams, Link } from 'react-router-dom';
import { useApiList } from '../hooks/useApi';
import { useEffect, useState } from 'react';
import Skeleton from './Skeleton';

export function ItemListContainer() {
    const { categoria } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const skeletonVariants = {
        width: '90%',
        height: '55px',
        borderRadius: '12px',
        marginBottom: '20px',
    }

    useEffect(() => {
        useApiList(categoria)
            .then((data) => {
                setItems(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="todos-platos-lista">
            {loading ? (
                <Skeleton
                    count={8}
                    variants={[{ width: '35%', height: '32px', borderRadius: '12px', marginBottom:'30px' }, skeletonVariants, skeletonVariants, skeletonVariants, skeletonVariants, skeletonVariants, skeletonVariants, skeletonVariants]}
                    marginTop={15}
                />
            ) : (
                <>
                    <h2 className="menu-title">{categoria}</h2>
                    {items.map((plato, index) => (
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
                </>
            )}
        </div>
    );
}