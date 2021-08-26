import React, {useEffect, useState} from 'react'
import {StyledCounter} from './ContadorElements';
function Contador({setCount, maxCount}) {
    const [contador, setContador] = useState(0);
    const handleButtonp = () => {
        (contador<maxCount && contador<10 ?setContador(contador+1) : contador === 10 ? alert("Se llegó al límite de 10 productos permitidos por compra.") :alert("No hay stock suficiente.\nActualmente hay " + maxCount + " disponibles."))
    };
    
    const handleButtonl = () => {
        (contador>0?setContador(contador-1):alert("Por favor, seleccione una cantidad valida de productos."))
    };

    useEffect(() => {
        setCount(contador);
    }, [contador])// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <StyledCounter className='Contador' cant={contador}>
            <button onClick={handleButtonl}> - </button>
            <h2>Cantidad: {contador}</h2>
            <button onClick={handleButtonp}> + </button>
        </StyledCounter>
    );
};
export default Contador;