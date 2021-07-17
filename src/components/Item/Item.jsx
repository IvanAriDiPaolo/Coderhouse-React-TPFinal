import React from 'react'
import {Link} from 'react-router-dom';

export const Item = (props) => {

    const {nombre, descripcion, precio} = props;

    return (
        <article className="Item">
            <Link to='/catalogo/:id'>
                <img src="https://via.placeholder.com/150" alt="Si" />
            </Link>
            <h4>{nombre}</h4>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
        </article>
    )
}
