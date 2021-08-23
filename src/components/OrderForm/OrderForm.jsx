import React,{useContext} from 'react'
import { Context } from '../../services/Context';

export const OrderForm = ({crearOrder,checkProductos}) => {
    const {total} = useContext(Context);

    const enviarForm = (ev) =>{
        ev.preventDefault();
        let nombre = ev.target.nombre.value;
        let email = ev.target.email.value;
        let celular = ev.target.celular.value;
        checkProductos(nombre, email, celular);
        ev.target.reset();
    }

    return (
        <>
            <h3>Ingresá tus datos para finalizar la compra:</h3>
            <form onSubmit={enviarForm}>
                <label>Nombre Completo</label>
                <input type="text" placeholder="Ingresar Nombre" id="nombre"/>
                <label>E-Mail</label>
                <input type="text" placeholder="E-Mail" id="email"/>
                <label>Celular</label>
                <input type="text" placeholder="Celular" id="celular"/>
                <h4>Total: {total}</h4>
                <button type="submit">Send</button>
            </form>
        </>
    )
}
