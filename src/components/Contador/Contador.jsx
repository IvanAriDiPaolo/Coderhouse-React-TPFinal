import React, {useState} from 'react'

function Contador() {
    const [state, setState] = useState(0);
    const handleButtonp = () => {
        (state<5?setState(state+1):console.log("No puede ser mayor que 5"))
    };
    
    const handleButtonl = () => {
        (state>0?setState(state-1):console.log("No puede ser menor que 0"))
    };

    const reset = () => {
        setState(0)
    };
    return(
        <div className='Contador'>
            <button onClick={handleButtonp}> Clickear + </button>
            <button onClick={handleButtonl}> Clickear - </button>
            <h2>Click dados: {state}</h2>
            <button onClick={reset}>reset</button>
        </div>
    );
};
export default Contador;