import React, { useEffect, useState } from "react"
import { Item } from '../Item/Item';
import Loader from "../Loader/Loader";
import { database } from "../../firebase/firebase";

const ItemListContainer = () => {
    //Estado array de productos
    const [productosAMostrar, setProductosAMostrar] = useState([])
    //Estado de loading
    const [loading, setLoading] = useState(false)
    
    const obtenerProductos = () => {
        const products = database
            .collection("Catalogo")
        products.get().then(((query) =>
            setProductosAMostrar(
                query.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
        )
        )
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve( obtenerProductos );
            }, 1000);
        });
    }

    //Cargar loading    
    useEffect(() => {
        setLoading(true)
        obtenerProductos()
            .then(res => {
                obtenerProductos(res)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {loading ? <Loader/> :
            productosAMostrar.length ? (productosAMostrar.map((prod) => <Item Item={prod.Item} key={prod.id} {...prod}/>)) : (<h3>Cargando...</h3>)}
        </div>
    );
};
export default ItemListContainer;