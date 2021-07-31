import React, { useState } from "react";
import Cart from './Cart/Cart';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Navbar = (props) => {
    const [categorias, setCategorias] = useState(false);
    return (
        <nav className="NavBar">
            <div className="NavBarDiv">
                <div className="DivTienda">
                    <Link to='/'>
                        <p className="NavBarUlLiT">Tienda de {props.nombreDeLaTienda}</p>
                    </Link>
                </div>
                <div className="DivOtros">
                    <Link to='/Nosotros'>
                        <p className="NavBarUlLi">Nosotros</p>
                    </Link>
                    <p className="NavBarUlLi" onClick={() => setCategorias(!categorias)}>Catálogo</p>
                    <Link to='/Contacto'>
                        <p className="NavBarUlLi">Contacto</p>
                    </Link>
                    <Cart/>
                </div>
            </div>
            <div>
                {categorias ? "" :  
                <>
                <br/>
                <Link to={`/Catalogo/Zapa`}>
                    <p>Zapas</p>
                </Link>
                <Link to={`/Catalogo/Ropa`}>
                    <p>Ropa</p>
                </Link>
                </>}
            </div>
        </nav>
    )
};
export default Navbar;