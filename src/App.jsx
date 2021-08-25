import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { DataProvider } from './services/Context';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { Carrito } from './components/Carrito/Carrito';
import { OpinionesContainer } from './components/Opiniones/OpinionesContainer';
import {StyledApp} from './AppElements';

const App = () => {

  return (
    <DataProvider>
      <StyledApp>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path="/Catalogo/:id">
              <ItemListContainer/>
            </Route>
            <Route exact path="/Item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/Carrito">
              <Carrito/>
            </Route>
            <Route exact path="/Referencias">
              <OpinionesContainer/>
            </Route>
          </Switch>
          <div></div>
        </BrowserRouter>
      </StyledApp>
    </DataProvider>
  );
}
//los componentes son funciones, todos saben que en js la función se debe ejecutar para que funcionen, en este caso, los componentes que se quieren mostrar en el DOM, que devuelven algún tag "HTML", se los importa en el componente donde se los quiere utilizar, de ese modo se ejecuta
//No es solo la vista, la idea de la separación de componente, es que cada componente solo cumpla su función especifica, ya sea retornando etiquetas de HTML o lógica de js

export default App;