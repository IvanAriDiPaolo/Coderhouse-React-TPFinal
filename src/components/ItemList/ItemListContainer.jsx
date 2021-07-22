import React,{useEffect, useState} from "react"
import {Item} from '../Item/Item';
import importProductos from '../../json/productos.json'

const ItemListContainer = () => {

    const[productos, setProductos] = useState([])

    const arrayProductos = importProductos;


    const cargarData = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve( arrayProductos );
            }, 1000);
        });
    };

    useEffect(()=>{
        cargarData()
            .then((resultado) => setProductos(resultado))
    }, [arrayProductos]);

    return(
        <section className="ilc">
            {/* <Item {...prod1}/>
            <Item {...prod2}/>
            <Item {...prod3}/>
            <Item {...prod4}/> */}
            {productos.map((prod) => <Item Item={prod.Item} key={prod.id} {...prod}/>)}
        </section>
    );
};
export default ItemListContainer;