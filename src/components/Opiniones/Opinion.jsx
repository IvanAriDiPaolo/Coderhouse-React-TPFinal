import React from 'react'
import {StyledOpinion} from './OpinionesElements';
export const Opinion = ({data : {nombre, opinion, likes, fecha, id}, sumarLike}) => {
    return (
        <StyledOpinion>
            <strong>{nombre}</strong>
            <p>{opinion}</p>
            <p>{likes} LIKES</p>
            <button onClick={() => sumarLike(id)}>Like</button>
        </StyledOpinion>
    )
}
