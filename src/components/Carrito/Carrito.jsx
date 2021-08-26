import React, {useContext} from 'react'
import { Context } from '../../services/Context';
import { OrderFormContainer } from '../OrderForm/OrderFormContainer';
import { ItemEnCarrito } from './ItemEnCarrito';
import {StyledCarrito, StyledImg} from './CarritoElements';
import {Link} from 'react-router-dom';

export const Carrito = () => {
    const {cart,clear, total} = useContext(Context);
    return (
        <StyledCarrito>
            {
                cart.length ?
                <div>
                    <h1>Carrito actual:</h1>
                    <div>
                        {cart.map((prod) => <ItemEnCarrito className="itemencarrito" Cant= {prod.quantity} Item={prod.Item} key= {prod.id} {...prod}/>)}
                    </div>
                    <button onClick={() => {clear()}}>Vaciar Carrito</button>
                    <h3>Total: ${total}</h3>
                    <OrderFormContainer className="orderformcontainer"/>
                </div>
                :
                <div>
                <h2>Carrito Vacio</h2>
                <Link to="/Catalogo/Todo">
                    <button>Comenzar a comprar</button>
                </Link>
                <StyledImg src='https://letrasrecortadas.com/carritoVacio.png'/>
                </div>
            }
        </StyledCarrito>
    )
}
