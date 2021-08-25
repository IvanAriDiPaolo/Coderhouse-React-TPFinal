import React,{useContext, useState} from 'react'
import { Context } from '../../services/Context';

export const OrderForm = ({crearOrder,checkProductos}) => {
    const {total} = useContext(Context);
    const [vemail, setVemail] = useState("");
    const [verif, setVerif] = useState(false);
    
    const enviarForm = (ev) =>{
        ev.preventDefault();
        let nombre = ev.target.nombre.value;
        let email = ev.target.email.value;
        let celular = ev.target.celular.value;
        if (nombre !== "" && email !== "" && celular !== "" && celular > 0){
            checkProductos(nombre, email, celular);
            ev.target.reset();
        }else{
            alert("Verificar datos ingresados.")
        }
    }

    const verifEmail = (ev) =>{
        setVemail(ev.target.value);
    } 
    
    const handleChange = async (ev) => {
        if (vemail === ev.target.value){
            setVerif(true);
        }else{
            setVerif(false)
        }
    }
    
    return (
        <>
            <h3>Ingresá tus datos para finalizar la compra:</h3>
            <form onSubmit={enviarForm}>
                <label>Nombre Completo</label>
                <input type="text" placeholder="Ingresar Nombre" id="nombre"/>
                <label>E-Mail</label>
                <input type="text" placeholder="E-Mail" id="email" onChange={verifEmail}/>
                <input type="text" placeholder="Re ingresar E-Mail" id="cemail" onChange={handleChange}/>
                <label>Celular</label>
                <input type="text" placeholder="Celular" id="celular"/>
                <h4>Total: {total}</h4>
                {verif ? <button type="submit">Send</button> : <button type="submit" disabled>Send</button> }
            </form>
        </>
    )
}
