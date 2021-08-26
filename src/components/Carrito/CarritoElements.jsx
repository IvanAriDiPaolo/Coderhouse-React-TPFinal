import styled from 'styled-components';

export const StyledCarrito = styled.div`
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.4rem;
        margin: 1rem;
        color: white;
        img{
            border-radius: 2rem;
        }
        button{
            padding: 0.2rem;
            border: 0.2rem white solid;
            border-radius: 2rem;
        }
        h3{
            padding: 0.5rem;
            border-radius: 1rem;
            border: 0.2rem white solid;
        }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            text-align: center;
            gap: 3rem;
            article{
                display: flex;
                flex-direction: column;
                gap: 0.3rem;
                button{
                    padding: 0.1rem;
                }
            }
        }
    }
`

export const StyledImg = styled.img`
    position: absolute;
    top: 30%;
    left: 37%;
    width: 23%;
`