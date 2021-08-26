/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import Loader from "../Loader/Loader";
import { database } from "../../firebase/firebase";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import {StyledInfo, StyledItemListContainer} from './ItemListElements';

const ItemListContainer = () => {
    //Estado array de productos
    const [productosAMostrar, setProductosAMostrar] = useState([])
    //Estado de loading
    const [loading, setLoading] = useState(false)
    
    const {id: idParams} = useParams();

    const obtenerProductos = () => {
        let products = "";
        if (idParams !== "Todo"){
                products = database
                .collection("Catalogo")
                .where("categoria", '==', idParams)
        }else{
                products = database
                .collection("Catalogo")
        }
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

    useEffect(() => {
        obtenerProductos()
    }, [idParams])
    
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
        <StyledItemListContainer>
            {loading ? <Loader class='hola'/> : productosAMostrar.length ? <ItemList productosAMostrar={productosAMostrar}/> : (<h3>Cargando...</h3>)}
            <StyledInfo>(HACER CLICK SOBRE EL PRODUCTO DESEADO PARA AGREGAR AL CARRITO)</StyledInfo>
        </StyledItemListContainer>
    );
};
export default ItemListContainer;
