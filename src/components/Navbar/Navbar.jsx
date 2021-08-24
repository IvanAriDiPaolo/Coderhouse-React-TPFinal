import React, { useState } from "react";
import Cart from './Cart/Cart';
import {useHistory, Link} from 'react-router-dom';

const Navbar = (props) => {
    let history = useHistory();

    function handleChange(e){
        history.push(`/Catalogo/${e.target.value}`);
        e.target.value = "Categorias";
    };

    return (
        <nav className="NavBar">
            <div className="NavBarDiv">
                <div className="DivTienda">
                    <Link to='/'>
                        <p className="NavBarUlLiT">Tienda de {props.nombreDeLaTienda}</p>
                    </Link>
                </div>
                <div className="DivOtros">
                    <Link to='/Referencias'>
                        <p className="NavBarUlLi">Referencias</p>
                    </Link>
                    <select onChange={handleChange}>
                        <option blocked selected value="Categorias" disabled>Categorias</option>
                        <option value="Zapa">Zapas</option>
                        <option value="Ropa">Ropa</option>
                    </select>
                    <Link to='/Contacto'>
                        <p className="NavBarUlLi">Contacto</p>
                    </Link>
                    <Link to='/Carrito'>
                        <Cart/>
                    </Link>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;