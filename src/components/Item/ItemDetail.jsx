import React, {useContext, useState} from 'react'
import { Context } from '../../services/Context';
import Contador from '../Contador/Contador'

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
        <article>
            <img src={itemToDisplay.img} alt="Si" />
            <h4>{itemToDisplay.nombre}</h4>
            <h5>Stock: {itemToDisplay.stock}</h5>
            <button onClick={() => onAdd()}>{terminado ? "Modificar" : "Agregar"}</button>
            {terminado ?
                <div>
                    <p>Usted seleccionó {count} productos</p>
                    <p>El total de los productos seria de ${count * itemToDisplay.precio}</p>
                    <p>Esto se adicionará a su carrito, desea confirmar?</p>
                    <button onClick={() => handleSend()}>Confirmar</button>
                </div> :
            <>
                <Contador
                inicial= {1}
                count = {count}
                setCount = {setCount}
                maxCount = {itemToDisplay.stock}/>
                <p>{itemToDisplay.descripcion}</p>
                <p>Precio: ${itemToDisplay.precio}</p>
            </>}
        </article>
    )
}
export default ItemDetail;