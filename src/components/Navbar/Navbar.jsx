import React from "react";
import Cart from './Cart/Cart';
import './styles/Navbar.scss';

const Navbar = (props) => {
    return (
        <nav className="NavBar">
            <div className="NavBarDiv">
                <div className="DivTienda">
                    <li className="NavBarUlLiT">Tienda de {props.nombreDeLaTienda}</li>
                </div>
                <div className="DivOtros">
                    <p className="NavBarUlLi">Nosotros</p>
                    <p className="NavBarUlLi">Catálogo</p>
                    <p className="NavBarUlLi">Contacto</p>
                    <Cart/>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;