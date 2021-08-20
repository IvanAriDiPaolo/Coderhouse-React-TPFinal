import React, {useContext} from 'react'
import { Context } from '../../services/Context';
import { ItemEnCarrito } from './ItemEnCarrito';

export const Carrito = () => {
    const {cart, total,clear} = useContext(Context);
    return (
        <>
            {
                cart.length ?
                <>
                <p>{total}</p>
                {cart.map((prod) => <ItemEnCarrito Cant= {prod.quantity} Item={prod.Item} key= {prod.id} {...prod}/>)}
                <button onClick={() => {clear()}}>Eliminar Todo</button>
                </>
                :
                <p>hola</p>
            }
            </>
    )
}
