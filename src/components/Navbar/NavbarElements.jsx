import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    min-height: 5rem;
    background-color: #353535;
    text-align: center;
    text-decoration: none;
    box-sizing: content-box;
    border-end-end-radius: 3rem;
    p {
        font-family: Georgia, "Times New Roman", Times, serif;
        display: block;
        bottom: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        color: #adb7be;
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
                display: flex;
                position: relative;
                top: 0.7rem;
                width: 2rem;
            }
        }
    }
    select{
        background-color: #353535;
        border-color:  #353535;
        color: #adb7be;
        font-family: Georgia, "Times New Roman", Times, serif;
        font-size: 2rem;
    }
`