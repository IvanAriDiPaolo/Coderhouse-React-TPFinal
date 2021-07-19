import React from "react";
import Cart from './Cart/Cart';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="NavBar">
            <div className="NavBarDiv">
                <div className="DivTienda">
                    <Link to='/'>
                        <li className="NavBarUlLiT">Tienda de {props.nombreDeLaTienda}</li>
                    </Link>
                    </div>
                <div className="DivOtros">
                    <Link to='Nosotros'>
                        <p className="NavBarUlLi">Nosotros</p>
                    </Link>
                    <Link to='catalogo'>
                        <p className="NavBarUlLi">Catálogo</p>
                    </Link>
                    <Link to='Nosotros'>
                        <p className="NavBarUlLi">Contacto</p>
                    </Link>
                    <Cart/>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;