import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
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
        const db = getFirestore()
        const menuCollection = collection(db, 'menu');
        const queryCollection = query(menuCollection, where('tipo', '==', categoria));

        getDocs(queryCollection).then((response) => {
            const responseMapped = response.docs[0].data().platos || [];
            setItems(responseMapped);
        }).finally(() => {
            setLoading(false);
        });
    }, [categoria]);

    return (
        <div className="todos-platos-lista">
            {loading ? (
                <Skeleton
                    count={8}
                    variants={[{ width: '35%', height: '32px', borderRadius: '12px', marginBottom: '30px' }, skeletonVariants, skeletonVariants, skeletonVariants, skeletonVariants, skeletonVariants, skeletonVariants, skeletonVariants]}
                    marginTop={15}
                />
            ) : (
                <>
                    <h2 className="menu-title">{categoria}</h2>
                    {items.map((plato, index) => (
                        <Link to={`/detail/${plato.ID}`} key={index} className="menu-principal-link">
                            <div className="plato-detalle">
                                <div className='plato-detalle-texto'>
                                    <span className="nombre-plato">{plato.nombre}</span>
                                    <span className="descripcion-plato">{plato.descripcion}</span>
                                </div>
                                <span className="precio-plato">${plato.precio}</span>
                            </div>
                        </Link>
                    ))}
                </>
            )}
        </div>
    );
}