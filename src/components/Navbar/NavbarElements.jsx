import styled from 'styled-components';

export const StyledNavbar = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300&display=swap');
min-height: 5rem;
background-color: #353535;
text-align: center;
text-decoration: none;
box-sizing: content-box;
p {
        font-family: 'Exo 2', sans-serif;
        display: block;
        bottom: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        color: #ffffff;
        &:hover{
            text-decoration: overline;
            transition: all 0.5s ease-in;
        }
    }
    .NavBarDiv {
        border-right: 1rem solid transparent;
        border-left: 1rem solid transparent;
        top: 1rem;
        position: relative;
        display: flex;
        justify-content: space-between;
        .DivOtros {
            display: flex;
            flex-direction: row;
            top: 1rem;
            gap: 1rem;
            img {
                position: relative;
                top: 0.8rem;
                width: 2.3rem;
                z-index: 6;
            }
            #contador{
                position: absolute;
                height: 2rem;
                width: 2rem;
                border-radius: 100%;
                color: white;
                background-color: black;
                right: 1.2rem;
                top: 2rem;
                z-index: 5;

            }
        }
    }
    select{
        background-color: #353535;
        border-color:  #353535;
        color: #ffffff;
        font-family: 'Exo 2', sans-serif;
        font-size: 2rem;
    }
`