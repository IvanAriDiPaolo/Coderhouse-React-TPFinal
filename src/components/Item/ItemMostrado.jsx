import React from 'react'
import {useParams} from 'react-router';

const ItemMostrado = () => {

    const {id} = useParams;

    const productoos = [{
        id : 1, 
        nombre:"remera",
        descripcion: "roja",
        precio: 1600
    },
    {
        id : 2,
        nombre:"Cinturon",
        descripcion: "Cuero",
        precio: 313
    },
    {
        id : 3,
        nombre:"Anteojos",
        descripcion: "Grises",
        precio: 2222
    },
    {
        id : 4,
        nombre:"Zapatos",
        descripcion: "Negros",
        precaao: 4144
    }]

    return (
        <div>
            <p>{productoos.id}</p>
        </div>
    )
}

export default ItemMostrado
