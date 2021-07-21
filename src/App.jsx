import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar nombreDeLaTienda="Teclados"/>
        <Switch>
          <Route exact path='/'>
            <strong>Este es el home, bienvenido a la página.</strong>
            <br></br>
            <strong>Todavía no tiene mucho estilado, pero tranquilo que ya lo va a tener!.</strong>
          </Route>
          <Route exact path="/Catalogo">
            <ItemListContainer/>
          </Route>
          <Route exact path="/Catalogo/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
//los componentes son funciones, todos saben que en js la función se debe ejecutar para que funcionen, en este caso, los componentes que se quieren mostrar en el DOM, que devuelven algún tag "HTML", se los importa en el componente donde se los quiere utilizar, de ese modo se ejecuta
//No es solo la vista, la idea de la separación de componente, es que cada componente solo cumpla su función especifica, ya sea retornando etiquetas de HTML o lógica de js

export default App;