import React from "react";
import Cart from './Cart/Cart';
import {useHistory, Link} from 'react-router-dom';
import { StyledNavbar } from "./NavbarElements";

const Navbar = () => {
    let history = useHistory();

    function handleChange(e){
        history.push(`/Catalogo/${e.target.value}`);
        e.target.value = "Categorias";
    };

    return (
        <StyledNavbar>
            <div className="NavBarDiv">
                <div className="DivTienda">
                    <Link to='/'>
                        <p className="NavBarUlLiT">Ropita del Barrio</p>
                    </Link>
                </div>
                <div className="DivOtros">
                    <select onChange={handleChange}>
                        <option defaultValue disabled>Categorias</option>
                        <option value="Zapa">Zapas</option>
                        <option value="Ropa">Ropa</option>
                    </select>
                    <Link to='/Referencias'>
                        <p className="NavBarUlLi">Referencias</p>
                    </Link>
                    <Link to='/Contacto'>
                        <p className="NavBarUlLi">Contacto</p>
                    </Link>
                    <Link to='/Carrito'>
                        <Cart/>
                    </Link>
                </div>
            </div>
        </StyledNavbar>
    )
};
export default Navbar;