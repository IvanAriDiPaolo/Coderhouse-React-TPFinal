import React, {useContext} from 'react'
import { Context } from '../../services/Context';
import { OrderFormContainer } from '../OrderForm/OrderFormContainer';
import { ItemEnCarrito } from './ItemEnCarrito';

export const Carrito = () => {
    const {cart, total,clear} = useContext(Context);
    return (
        <>
            {
                cart.length ?
                <>
                {cart.map((prod) => <ItemEnCarrito Cant= {prod.quantity} Item={prod.Item} key= {prod.id} {...prod}/>)}
                <button onClick={() => {clear()}}>Eliminar Todo</button>
                <p>{total}</p>
                <OrderFormContainer/>
                </>
                :
                <p>Carrito vacio.</p>
            }
            </>
    )
}
