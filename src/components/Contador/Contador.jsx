import React, {useEffect, useState} from 'react'

function Contador({setCount, maxCount}) {
    const [state, setState] = useState(0);
    const handleButtonp = () => {
        (state<maxCount && state<10 ?setState(state+1) : state == 10 ? alert("Se llegó al límite de 10 productos permitidos por compra.") :alert("No hay stock suficiente.\nActualmente hay " + maxCount + " en stock."))
    };
    
    const handleButtonl = () => {
        (state>0?setState(state-1):alert("Por favor, seleccione una cantidad valida de productos."))
    };

    useEffect(() =>{
        setCount(state);
    },[state])

    return(
        <div className='Contador' cant={state}>
            <button onClick={handleButtonl}> - </button>
            <h2>Cantidad: {state}</h2>
            <button onClick={handleButtonp}> + </button>
        </div>
    );
};
export default Contador;