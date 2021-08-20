import React from 'react'

export const AgregarOpinion = ({agregarOp}) => {

    const manejarSubmit = (ev) => {
        ev.preventDefault();
        let nombre = ev.target.nombre.value;
        let opinion = ev.target.opinion.value;
        agregarOp(nombre,opinion);
        ev.target.reset();
    }

    return (
        <>
            <h3>Tu opinion nos importa!</h3>
            <form onSubmit={manejarSubmit}>
                <label>Nombre</label>
                <input type="text" placeholder="Ingresar Nombre" id="nombre"/>
                <label>Opinion</label>
                <textarea placeholder="Ingresar opinion..." id="opinion"></textarea>
                <button type="submit">Send</button>
            </form>
        </>
    )
}
