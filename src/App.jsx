import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contador from './components/Contador/Contador.jsx'

function App() {
  return (//el return  devuelve 1 cosa sola, por ejemplo el div q incluye el h1
    <div className="App">
      <Navbar nombreDeLaTienda="Teclados"/>
      <Contador/>
    </div>
  );
}
//los componentes son funciones, todos saben que en js la función se debe ejecutar para que funcionen, en este caso, los componentes que se quieren mostrar en el DOM, que devuelven algún tag "HTML", se los importa en el componente donde se los quiere utilizar, de ese modo se ejecuta
//No es solo la vista, la idea de la separación de componente, es que cada componente solo cumpla su función especifica, ya sea retornando etiquetas de HTML o lógica de js

export default App;