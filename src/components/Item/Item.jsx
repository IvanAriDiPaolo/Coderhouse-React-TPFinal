import React from 'react'

export const Item = ({nombre, descripcion, precio}) => {

    //const {nombre, descripcion, precio} = props;

    return (
        <article className="Item">
            <h4>{nombre}</h4>
            <p>{descripcion}</p>
            <p>Precio.- ${precio}</p>
        </article>
    )
}
