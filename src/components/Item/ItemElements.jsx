import styled from "styled-components";

export const StyledItemListened = styled.article`
  text-align: center;
  h4 {
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
  p{
    color: #ffffff;
    font-size: 1rem;
  }
  h6{
    color: #ffffff;
    font-size: 0.7rem;
  }
  img{
    border-radius: 2rem;
  }
`
export const StyledItemDetailed = styled.article`
  img{
    grid-area: imagen;
  }
  button{  
    grid-area: boton;
    width: 6rem;
    height: 3rem;
    color: #353535;
    background-color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    border: white solid;
    border-radius: 2rem;
  }
  display: grid;
  grid-template-columns: 15rem 15rem;
  grid-row: 2;
  grid-gap: 1rem;
  grid-template-areas: 
  'imagen def'
  'boton def';
  align-items: center;
  justify-content: center;
  justify-items: center;
`
export const StyledItemDetailedInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h4{
    font-size: 3rem;
    color: #222425;
  }
  p{
    color: #ffffff;
    font-size: 1rem;
  }
  div{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    p{
      text-align: center;
      font-size: 1rem;
      color: white;
    }  
  }
  button{
      width: 6rem;
      height: 2rem;
      color: #353535;
      background-color: #ffffff;
      font-size: 1rem;
      font-weight: bold;
    }
`