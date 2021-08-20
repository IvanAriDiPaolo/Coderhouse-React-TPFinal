import React, {useContext, useState, useEffect} from 'react'
import {database} from '../../firebase/firebase'

export const OrderFormContainer = () => {
    const {cart} = useContext(Context); 

    const orders = database.collection('orders')

    const enviarForm = () =>{

    }

    useEffect(() => {
        
    }, [cart])
    return (
        <form>

        </form>
    )
}
