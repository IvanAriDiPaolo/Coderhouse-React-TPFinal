import React, {useState, useEffect}  from 'react';
import {useParams} from 'react-router-dom';
import importProductos from '../../json/productos.json'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    
    const arrayProductos = importProductos;

    const [itemToDisplay, setItemToDisplay] = useState();
    
    const{id: idParams} = useParams();

    const getSelectedItems = () => {
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(arrayProductos.find((Item) => Item.id.toString() === idParams));
            }, 4000);
        });
    };

    useEffect(() => {
        setItemToDisplay();
        getSelectedItems().then((result) => setItemToDisplay(result));
    }, [idParams]);

    return <ItemDetail itemToDisplay={itemToDisplay}/>
}

export default ItemDetailContainer
