import React,{useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';
import {database} from '../../firebase/firebase';

function ItemDetailContainer() {
    const [itemsEnStock, setItemsEnStock] = useState([]);
    
    const [itemToDisplay, setItemToDisplay] = useState();
    
    const [loading, setLoading] = useState(false);
    
    const{id: idParams} = useParams();

    
    const obtenerProductos = () => {
        const items = database
        .collection("Catalogo")
        items.get().then(((query) =>
        setItemsEnStock(
            query.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))));
        }

    const getSelectedItems = () => {
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(itemsEnStock.find((Item) => Item.id.toString() === idParams));
                console.log(idParams)
            }, 500);
        });
    };
    
    useEffect(() => obtenerProductos(),[])
    

    return (
    <>
    {
        itemsEnStock.length === 0 ? <Loader/> : itemToDisplay && <ItemDetail itemToDisplay={itemToDisplay}/>
    }
    </>
    )
}

export default ItemDetailContainer
