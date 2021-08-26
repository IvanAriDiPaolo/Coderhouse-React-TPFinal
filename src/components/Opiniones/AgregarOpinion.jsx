import React from 'react'
import {StyledAgregarOpinion,StyledLabels,StyledInputs} from './OpinionesElements';

export const AgregarOpinion = ({agregarOp}) => {

    const manejarSubmit = (ev) => {
        ev.preventDefault();
        let nombre = ev.target.nombre.value;
        let opinion = ev.target.opinion.value;
        if(nombre !== "" && opinion !== ""){
            agregarOp(nombre,opinion);
            ev.target.reset();
        }else{
            alert("Revisar datos ingresados.")
        }
    }

    return (
        <StyledAgregarOpinion>
            <h3>Tu opinion nos importa!</h3>
            <form onSubmit={manejarSubmit}>
                <StyledLabels>
                    <label>Nombre</label>
                    <label>Opinion</label>
                </StyledLabels>
                <StyledInputs>
                <input type="text" placeholder="Ingresar Nombre" id="nombre"/>
                <textarea placeholder="Ingresar opinion..." id="opinion"></textarea>
                </StyledInputs>
                <button type="submit">Send</button>
            </form>
        </StyledAgregarOpinion>
    )
}
