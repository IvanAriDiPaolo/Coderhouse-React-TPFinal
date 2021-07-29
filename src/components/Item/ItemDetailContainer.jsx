/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {database} from '../../firebase/firebase';

const ItemDetailContainer = () => {
    const [itemsEnStock, setItemsEnStock] = useState([]);
    const [itemToDisplay, setItemToDisplay] = useState("");

    const {id: idParams} = useParams();

    const obtenerProductos = () => {
        const products = database
            .collection("Catalogo")
        products.get().then(((query) =>
            setItemsEnStock(
                query.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
        )
        )

        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve( obtenerProductos );
            }, 200);
        });
    }


    const getSelectedItems = () => {
        return new Promise((resolve) => {
            resolve(itemsEnStock.find((Item) => Item.id.toString() === idParams))
        });
    };

    useEffect(() => {
        obtenerProductos();
    }, [])

    useEffect(() => {
        setItemToDisplay();
        getSelectedItems().then((result) => setItemToDisplay(result));
    }, [itemsEnStock])  

    
    return (
        <>
        { itemToDisplay && <ItemDetail itemToDisplay={itemToDisplay}/>}
        </>
    )
}
export default ItemDetailContainer