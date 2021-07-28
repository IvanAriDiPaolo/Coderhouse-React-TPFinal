import React from 'react'
import {Item} from '../Item/Item'
export default function ItemList({productosAMostrar}) {
    return (
        <div>
            {productosAMostrar.map((prod) => <Item Item={prod.Item} key= {prod.id} {...prod}/>)}
        </div>
    )
}
