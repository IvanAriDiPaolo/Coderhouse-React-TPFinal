import React, {useState, useEffect} from 'react'
import Contador from '../Contador/Contador'

const ItemDetail = ({itemToDisplay:Item}) => {
    const [count, setCount] = useState();
    const [terminado, setTerminado] = useState(false);
    const handleState = () => setTerminado(!terminado)
    return (
        <div>
            <img src="https://via.placeholder.com/150" alt="Si" />
            <h4>{Item.nombre}</h4>
            <p>{Item.descripcion}</p>
            <p>Precio: ${Item.precio}</p>
            <Contador
            inicial= {1}
            count = {count}
            setCount = {setCount}/>
            <button>Agregar</button>
            {!terminado ? (<>
                <button onClick={handleState}>Terminar Compra</button>
                <button onClick="">Modificar</button>
            </>) : 
            (<>
            </>)
            }
        </div>    
    )
}

export default ItemDetail
