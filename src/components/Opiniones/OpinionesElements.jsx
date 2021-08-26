import styled from "styled-components";

export const StyledAgregarOpinion = styled.div`
display: flex;
gap: 2rem;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 2rem;
padding: 2rem;
width: 50%;
position: relative;
left: 20rem;
border: 0.1rem white solid;
border-radius: 1rem;
form{
    display: flex;
    flex-direction: column ;
    justify-content: center;
    gap: 1rem;
}

`
export const StyledLabels = styled.div`
display: flex;
position: relative;
left: 3rem;
gap: 9rem;
`

export const StyledOpinion = styled.div`
display: flex;
width: 10rem;
height: 9rem;
flex-direction: column;
flex-wrap: wrap;
text-align: center;
padding: 1rem;
border: 0.2rem black solid ;
border-radius: 0.1rem;
`

export const StyledInputs= styled.div`
display: flex;
gap: 2rem;
input{
text-align: center ;
}
`
export const StyledOpionionsContainer = styled.div`
display:flex;
gap: 2rem;
flex-direction: row;
flex-wrap:wrap;
justify-content: center;
align-items: center;
`