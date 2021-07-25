import React,{useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';
import {database} from '../../firebase/firebase';

function ItemDetailContainer() {
    const [itemsEnStock, setItemsEnStock] = useState([]);
    
    const [itemToDisplay, setItemToDisplay] = useState();
    
    const [loading, setLoading] = useState(false)
    
    const{id: idParams} = useParams();
    
    const obtenerProductos = () => {

        const items = database
            .collection("Catalogo")

        items.get().then(((query) =>
        setItemsEnStock(
            query.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            })
            )
            ))
            /*
            return new Promise((resolve,reject) => {
                setTimeout(()=>{
                    resolve( obtenerProductos );
                }, 1000);
            });*/
        }
        const getSelectedItems = () => {
            return new Promise((resolve) => {
                setTimeout(()=> {
                    resolve(itemsEnStock.find((Item) => Item.id.toString() === idParams));
                }, 3000);
            });
    };
    
    useEffect(() => {
        obtenerProductos()
        setItemToDisplay()
        getSelectedItems()
            .then((result) => setItemToDisplay(result));
    }, [idParams]);
 
    useEffect(() => {
        setLoading(true)
        getSelectedItems()
        .then(res => {
            getSelectedItems(res)
        })
        .catch(err=>{
                console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
        }, [])

    return (
    <>{
        loading ? <Loader/>
        :
        itemToDisplay && <ItemDetail itemToDisplay={itemToDisplay}/>
    }</>
    )
}

export default ItemDetailContainer
