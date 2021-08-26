import React,{useState} from 'react';
import{StyledOrderForm} from './OrderElements';
export const OrderForm = ({checkProductos}) => {
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
        <StyledOrderForm>
            <h4>Ingresá tus datos para finalizar la compra:</h4>
            <form onSubmit={enviarForm}>
                <input type="text" placeholder="Nombre y Apellido" id="nombre"/>
                <input type="text" placeholder="E-Mail" id="email" onChange={verifEmail}/>
                <input type="text" placeholder="Re ingresar E-Mail" id="cemail" onChange={handleChange}/>
                <input type="text" placeholder="Celular" id="celular"/>
                {verif ? <button type="submit">Send</button> : <button type="submit" disabled>Enviar pedido</button> }
            </form>
        </StyledOrderForm>
    )
}
