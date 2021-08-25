import React, {useContext, useState} from 'react'
import { Context } from '../../services/Context';
import Contador from '../Contador/Contador'
import {Link} from 'react-router-dom';
import {StyledItemDetailed, StyledItemDetailedInfo} from "./ItemElements";

const ItemDetail = ({itemToDisplay}) => {
    const {addToCart, removeFromCart} = useContext(Context);
    const [count, setCount] = useState();
    const [terminado, setTerminado] = useState(false);

    const onAdd = () => {
        if (count !== 0){
            setTerminado(!terminado);
        }else{
            alert("Tenes que agregar por lo menos 1 producto.")
        }
        if(terminado){
            handleRemove();
        }
    }  

    const handleSend = () =>{
        addToCart({...itemToDisplay, quantity: count})//se le esta pasando un objeto
        
    }
    
    const handleRemove = () =>{
        removeFromCart(itemToDisplay)
    }

    return (
        <StyledItemDetailed>
            <img src={itemToDisplay.img} alt="Si" />
            <button onClick={() => onAdd()}>{terminado ? "Modificar selección" : "Agregar al carrito"}</button>
            <StyledItemDetailedInfo>
                <h4>{itemToDisplay.nombre}</h4>
                {terminado ?
                    <div>
                        <p>Usted seleccionó {count} productos</p>
                        <p id='total'>El total de los productos seria de ${count * itemToDisplay.precio}</p>
                        <p>Esto se adicionará a su carrito, desea confirmar?</p>
                        <Link to='/Carrito'>
                        <button onClick={() => handleSend()}>Confirmar</button>
                        </Link>
                    </div> :
                <>
                    <p>Stock: {itemToDisplay.stock}</p>
                    <p>{itemToDisplay.descripcion}</p>
                    <p id='precio'>Precio: ${itemToDisplay.precio}</p>
                    <Contador
                    inicial= {1}
                    count = {count}
                    setCount = {setCount}
                    maxCount = {itemToDisplay.stock}/>
                </>
                }
            </StyledItemDetailedInfo>
        </StyledItemDetailed>
    )
}
export default ItemDetail;