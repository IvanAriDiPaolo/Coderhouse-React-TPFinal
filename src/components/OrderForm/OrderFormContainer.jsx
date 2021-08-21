import React, {useContext, useState, useEffect} from 'react'
import {database} from '../../firebase/firebase'
import { OrderForm } from './OrderForm';
import { Context } from '../../services/Context';

export const OrderFormContainer = () => {
    const {total, cart} = useContext(Context);

    const [orders, setOrders] = useState([]);

    const crearOrder = (nombre, email, celular) =>{
        let orderNueva= {
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
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(obtenerOreders());
    }

    const obtenerOreders = async () =>{
        let ordersRemotas = database.collection("Orders")
        let ordersFetcheadas = await ordersRemotas
            .get()
            .then((query) => (query.docs.map((item) => ({ ...item.data(), id: item.id }))))
    };

    useEffect(() => {
        
    }, [cart])

    return (
        <section>
            <OrderForm crearOrder={crearOrder}/>
        </section>
    )
}
