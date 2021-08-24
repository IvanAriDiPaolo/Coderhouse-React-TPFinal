import React, {useContext} from 'react'
import {database} from '../../firebase/firebase'
import { OrderForm } from './OrderForm';
import { Context } from '../../services/Context';
import firebase from "firebase/app";

export const OrderFormContainer = () => {
    const {total, cart, clear} = useContext(Context);
    let orderID;

    const checkProductos = async (nombre, email, celular) => {
        let productos = database.collection("Catalogo").where(
            firebase.firestore.FieldPath.documentId(),
            "in",
            cart.map((item) => item.id)
        );
        productos.get().then((query) =>{
            const batch = database.batch();
            const sinStock = [];
            query.docs.forEach((doc) => {
                let comparar =  cart.find((element) => element.id === doc.id)
                if(doc.data().stock >= comparar.quantity){
                    batch.update(doc.ref, {
                        stock: doc.data().stock - comparar.quantity
                    });
                    
                }else{
                    sinStock.push(doc.data().nombre)
                }
            })
            
            if (!sinStock.length){
                crearOrder(nombre, email, celular);
                batch.commit().then(()=>{
                    alert("Orden generada con exito! \n ID:" + orderID);
                    clear();
                })
            }else{
                alert("Sin stock!! \n Revisar la consola para mas detalle.")
                console.log("Se encontraron productos sin stock:")
                console.log(sinStock)
            }
        })
        };

        const crearOrder = (nombre, email, celular) =>{
            const orderNueva= {
                nombre: nombre,
                email: email,
                celular: celular,
                ttl: total,
                productos: cart,
                fecha: new Date().toString(),
            }
        const ordersNuevas = database.collection('Orders')
        ordersNuevas
            .add(orderNueva)
            .then((res) => orderID = (res))
            .catch((err) => console.log(err))
            .finally(obtenerOreders());
        }
    
    
        const obtenerOreders = async () =>{
            // let ordersRemotas = database.collection("Orders")
            // let ordersFetcheadas = await ordersRemotas
            //     .get()
            //     .then((query) => (query.docs.map((item) => ({ ...item.data(), id: item.id }))))
        };

    return (
        <section>
            <OrderForm crearOrder={crearOrder} checkProductos={checkProductos}/>
        </section>
    )
}