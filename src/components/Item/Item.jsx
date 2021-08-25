import React from 'react'
import {Link} from 'react-router-dom';
import {StyledItemListened} from './ItemElements';

export const Item = (props) => {    
    const {nombre, descripcion, precio, id, img} = props;
    return (
        <StyledItemListened className="Item">
            <Link to={`/Item/${id}`}>
                <img src={img} alt="Si" />
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
            </Link>
        </StyledItemListened>
    )
}
