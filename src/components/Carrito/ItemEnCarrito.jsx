import React, {useContext} from 'react'
import { Context } from '../../services/Context';

export const ItemEnCarrito = (props) => {
    const {id, img, nombre, precio, quantity} = props;
    const {cart, removeFromCart} = useContext(Context);

    return (
        <article className="Item">
                <img src={img} alt="Si" />
                <h4>{nombre}</h4>
                <p>Cantidad agregada: {quantity}</p>
                <p>Precio: ${precio}</p>
                <button onClick={() =>{ removeFromCart(id); console.log(cart[0].id)}}>Eliminar</button>
        </article>
    )
}
