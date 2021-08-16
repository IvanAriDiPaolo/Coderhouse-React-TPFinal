import React from 'react'

export const Opinion = ({data : {nombre, opinion, likes, fecha, id}, sumarLike}) => {
    return (
        <article>
            <strong>{nombre}</strong>
            <p>{opinion}</p>
            <p>{likes}</p>
            <button onClick={() => sumarLike(id)}>Like</button>
        </article>
    )
}
