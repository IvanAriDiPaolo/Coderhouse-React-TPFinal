import React, {useContext} from 'react'
import { Context } from '../../services/Context';
import { OrderFormContainer } from '../OrderForm/OrderFormContainer';
import { ItemEnCarrito } from './ItemEnCarrito';

export const Carrito = () => {
    const {cart,clear} = useContext(Context);
    return (
        <>
            {
                cart.length ?
                <>
                <h1>Carrito actual:</h1>
                {cart.map((prod) => <ItemEnCarrito Cant= {prod.quantity} Item={prod.Item} key= {prod.id} {...prod}/>)}
                <button onClick={() => {clear()}}>Eliminar Todo</button>
                <OrderFormContainer/>
                </>
                :
                <p>Carrito vacio :D</p>
            }
            </>
    )
}
