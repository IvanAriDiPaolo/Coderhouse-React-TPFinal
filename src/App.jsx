import React, {useEffect, useState} from 'react';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Contador from './components/Contador/Contador.jsx';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';

const App = () => {

  const[pokemonIngresado, setPokemonIngresado] = useState("");

  const[imagenPokemon, setImagenPokemon] = useState("");

  const[busqueda, setBusqueda] = useState("");

  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const getPoke = () => {
    fetch(url + pokemonIngresado)
      .then(response => response.json())
      .then(data => {
        if (data.sprites){
          setImagenPokemon(data.sprites.front_default)
        }
      })
      .catch(
        setImagenPokemon(
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'
        )
      );
  };

useEffect(()=>{
  getPoke();
}, [busqueda]);

/*Se ejecuta cada vez que se monta o se realiza un cambio en el array de dependencia*/


const handleInput = (evento) => setPokemonIngresado(evento.target.value)

  return (
    <div className="App">
      <Navbar nombreDeLaTienda="Teclados"/>
      <Contador/>
      <h1>Pokemon</h1>
      <img src={imagenPokemon}/>
      <form onSubmit={(evento) => {
        evento.preventDefault();
        setBusqueda(pokemonIngresado);
      }} 
      >
        <input type="text" onChange={handleInput}/>
        <ItemListContainer/>
      </form>
    </div>
  );
}
//los componentes son funciones, todos saben que en js la función se debe ejecutar para que funcionen, en este caso, los componentes que se quieren mostrar en el DOM, que devuelven algún tag "HTML", se los importa en el componente donde se los quiere utilizar, de ese modo se ejecuta
//No es solo la vista, la idea de la separación de componente, es que cada componente solo cumpla su función especifica, ya sea retornando etiquetas de HTML o lógica de js

export default App;