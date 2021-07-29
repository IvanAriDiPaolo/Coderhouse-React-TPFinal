import React, {useEffect, useState} from 'react'

function Contador({count, setCount}) {
    const [state, setState] = useState(0);
    const handleButtonp = () => {
        (state<5?setState(state+1):console.log("No puede ser mayor que 5"))
    };
    
    const handleButtonl = () => {
        (state>0?setState(state-1):console.log("No puede ser menor que 0"))
    };

    useEffect(() =>{
        setCount(state);
    },[state])

/*   const reset = () => {
        setState(0)
    };
*/
    return(
        <div className='Contador' cant={state}>
            <button onClick={handleButtonl}> - </button>
            <h2>Cantidad: {state}</h2>
            <button onClick={handleButtonp}> + </button>
        </div>
    );
};
export default Contador;