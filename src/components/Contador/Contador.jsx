import React, {useState} from 'react'
import './styles/Contador.css'

function Contador() {
    const [state, setState] = useState(0)
    const handleButtonp = () => {setState(state+1)
    }
    const handleButtonl = () => {setState(state-1)
    }
    const reset = () => {
        setState(0)
    }
    return(
        <div className='Contador'>
            <button onClick={handleButtonp}> Clickear + </button>
            <button onClick={handleButtonl}> Clickear - </button>
            <h2>Click dados: {state}</h2>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Contador;