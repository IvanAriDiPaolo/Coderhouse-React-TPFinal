import React,{useState, useEffect} from 'react'
import {idParams} from 'react'
import {Item} from '../Item/Item'
import Loader from '../Loader/Loader'
export default function ItemList({productosAMostrar}) {
    return (
        <div>
            {productosAMostrar.map((prod) => <Item Item={prod.Item} key= {prod.id} {...prod}/>)}
        </div>
    )
}
