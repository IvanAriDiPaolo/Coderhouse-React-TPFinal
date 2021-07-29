import React, {useState} from 'react'

function Contador() {
    const [cont, setCont] = useState(0);
    const handleButtonp = () => {
        (cont<5?setCont(cont+1):console.log("No puede ser mayor que 5"))
    };
    
    const handleButtonl = () => {
        (cont>0?setCont(cont-1):console.log("No puede ser menor que 0"))
    };

/*   const reset = () => {
        setCont(0)
    };
*/
    return(<>{ cont &&
        <div className='Contador' cont={cont}>
            <button onClick={handleButtonl}> - </button>
            <h2>Cantidad: {cont}</h2>
            <button onClick={handleButtonp}> + </button>
        </div>}</>
    );
};
export default Contador;