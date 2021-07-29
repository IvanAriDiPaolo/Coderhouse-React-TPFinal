import React, {useState} from 'react'
import Contador from '../Contador/Contador'

export default function ItemDetail({itemToDisplay}) {
    const [count, setCount] = useState();
    const [terminado, setTerminado] = useState(false);

    const onAdd = () => {
        setTerminado(!terminado);
    }  


    return (
        <article>
            <img src={itemToDisplay.img} alt="Si" />
            <h4>{itemToDisplay.nombre}</h4>
            <p>{itemToDisplay.descripcion}</p>
            <p>Precio: ${itemToDisplay.precio}</p>
            <Contador
            inicial= {1}
            count = {count}
            setCount = {setCount}/>
            <button onClick={() => onAdd()}>{terminado ? "Modificar" : "Agregar"}</button>
            {terminado ? <p>Se ha terminado la compra, usted seleccionó {count}</p> : ""}
        </article>
    )
}
