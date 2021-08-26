import styled from "styled-components";

export const StyledOrderForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    form{
        width: 30rem;
        display: flex;
        gap: 0.4rem;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        label{
            display: flex;
        }
        input{
            display: flex;
        }
        button{
            border: none;
            color: white;
            width: 9rem;
                background-color: black;
            :disabled{
                background-color: grey;
            }
        }
    }
`