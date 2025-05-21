import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useApiDetail } from '../hooks/useApi';
import Skeleton from './Skeleton';
import Contador from './Contador';

export function ItemDetailContainer() {
    const { nombre } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        useApiDetail(nombre)
            .then((data) => {
                setItems(data);
            })
            .finally(() => {
                setLoading(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
    }, []);

    return (
        loading ? (
            <Skeleton
                count={2}
                variants={[{ width: '85%', maxWidth: '370px', height: '500px', borderRadius: '6px'},
                { width: '30%', maxWidth: '120px', height: '32px', margin: '30px 0 0 0', borderRadius: '8px' }]}
                marginTop={20}
            />
        ) : (
            <div className='contenedor-plato'>
                <div className="plato-card">
                    <img src={items.imagen} alt={items.nombre} className="plato-img" />
                    <div className="plato-info">
                        <h3 className="plato-nombre">{items.nombre}</h3>
                        <h4 className="plato-descripcion">{items.descripcion}</h4>
                        {items.precio.map((precio, index) => (
                            <p key={index} className="plato-precio">${precio}</p>
                        ))}
                    </div>
                    <Contador product={items}/>
                </div>
                <button className='plato-button' onClick={() => navigate(-1)}>Volver atrás</button>
            </div>
        ));
}