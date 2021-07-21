import React from 'react'
import Contador from '../Contador/Contador'

const ItemDetail = ({itemToDisplay:Item}) => {
    return (
        <div>
            <img src="https://via.placeholder.com/150" alt="Si" />
            <h4>{Item.nombre}</h4>
            <p>{Item.descripcion}</p>
            <p>Precio: ${Item.precio}</p>
            <Contador/>
        </div>
    )
}

export default ItemDetail
