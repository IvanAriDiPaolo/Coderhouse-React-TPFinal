import React,{useEffect, useState} from "react"
import {Item} from '../Item/Item';
import {useParams} from 'react-router';

const ItemListContainer = () => {

    const[productos, setProductos] = useState([])


const {id} = useParams;

    const arrayProductos = [{
        id : 1, 
        nombre:"remera",
        descripcion: "roja",
        precio: 1600
    },
    {
        id : 2,
        nombre:"Cinturon",
        descripcion: "Cuero",
        precio: 313
    },
    {
        id : 3,
        nombre:"Anteojos",
        descripcion: "Grises",
        precio: 2222
    },
    {
        id : 4,
        nombre:"Zapatos",
        descripcion: "Negros",
        precaao: 4144
    }]

    const cargarData = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve( arrayProductos );
            }, 4000);
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
            {arrayProductos.map((prod) => <Item key={prod.id} {...prod}/>)}
        </section>
    );
};
export default ItemListContainer;