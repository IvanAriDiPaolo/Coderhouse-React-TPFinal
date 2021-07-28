/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from "react"
import {database} from "../../firebase/firebase";
import Loader from "../Loader/Loader";
import ItemList from "./ItemList";

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

    return (<>
        {loading ? <Loader/> : productosAMostrar.length ? <ItemList productosAMostrar={productosAMostrar}/> : (<h3>Cargando...</h3>)}
    </>);
};
export default ItemListContainer;