import React,{useContext} from 'react'

export const OrderForm = () => {
    const {total} = useContext(Context); 
    return (
        <>
            <h3>Ingresá tus datos para finalizar la compra:</h3>
            <form onSubmit={}>
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
