import React, {createContext, useState, useEffect} from 'react'
export const Context = createContext();

export const DataProvider = ({children}) =>{

    const [cart, setCart] = useState([]);//va a ser un array de objetos

    const [total, setTotal] = useState(0);

    const isntInCart = (receivedItem) => cart.filter(item => item.id === receivedItem.id).length === 0;

    const colorPrincipal = `220, 91, 219`;

    const addToCart = (receivedItem) =>{
        if (isntInCart(receivedItem)){
            setCart([...cart, receivedItem])
            alert("Se ha agregado el producto a su carrito exitosamente!")
        }else{
            alert("Ya se encuentra este producto en el carrito.")
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const clear = () => setCart([]);

    useEffect(() => {
        let CalcularTotal = 0;
        cart.forEach((item) =>  {
            CalcularTotal += item.precio*item.quantity})
        setTotal(CalcularTotal)
    }, [cart])

    return <Context.Provider value = {{cart, setCart, addToCart, removeFromCart, clear, total, colorPrincipal}}>
        {children}
    </Context.Provider>
}
