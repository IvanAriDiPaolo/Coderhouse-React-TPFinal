import React from "react"
import {Item} from '../Item/Item';
const ItemListContainer = () => {

    const productos = [{
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
        new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(productos);
            }, 4000);
        });
    };

    // cargarData(productos)
    //     .then((resultado) => console.log(resultado))

    return(
        <section className="ilc">
            {/* <Item {...prod1}/>
            <Item {...prod2}/>
            <Item {...prod3}/>
            <Item {...prod4}/> */}
            {productos.map((prod) => <Item key={prod.id} {...prod}/>)}
        </section>
    );
};
export default ItemListContainer;