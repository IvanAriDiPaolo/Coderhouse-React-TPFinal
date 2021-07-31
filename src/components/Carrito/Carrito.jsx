import React, {useContext} from 'react'
import { Context } from '../../services/Context';
import { ItemEnCarrito } from './ItemEnCarrito';

export const Carrito = () => {
    const {cart} = useContext(Context);
    return (
        <>
            {cart.map((prod) => <ItemEnCarrito Cant= {prod.quantity} Item={prod.Item} key= {prod.id} {...prod}/>)}
        </>
    )
}
