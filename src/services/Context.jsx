import React, {createContext, useState, useEffect} from 'react'
export const Context = createContext();

export const DataProvider = ({children}) =>{

    const [cart, setCart] = useState([]);//va a ser un array de objetos

    const [total, setTotal] = useState(0);

    const [totalElementos, setTotalElementos] = useState (0);

    const isntInCart = (receivedItem) => cart.filter(item => item.id === receivedItem.id).length === 0;

    const colorPrincipal = `220, 91, 219`;

    const addToCart = (receivedItem) =>{
        if (isntInCart(receivedItem)){
            setCart([...cart, receivedItem]);
            alert("Se ha agregado el producto a su carrito exitosamente!");
            setTotalElementos(totalElementos + receivedItem.quantity);
        }else{
            alert("Ya se encuentra este producto en el carrito.")
        }
    };

    const removeFromCart = (id) => {
        let cant = cart.find(prod => prod.id === id).quantity;
        setCart(cart.filter(prod => prod.id !== id));
        setTotalElementos(totalElementos - cant);
    }

    const clear = () => {
        setCart([]);
        setTotalElementos(0);    
    };

    useEffect(() => {
        let CalcularTotal = 0;
        cart.forEach((item) =>  {
            CalcularTotal += item.precio*item.quantity})
        setTotal(CalcularTotal);
    }, [cart])

    return <Context.Provider value = {{cart, setCart, addToCart, removeFromCart, clear, total, colorPrincipal, totalElementos, setTotalElementos}}>
        {children}
    </Context.Provider>
}
