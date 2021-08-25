import React from 'react'
import {Item} from '../Item/Item'
import {StyledItemList} from './ItemListElements';
export default function ItemList({productosAMostrar}) {
    return (
        <StyledItemList>
            {productosAMostrar.map((prod) => <Item Item={prod.Item} key= {prod.id} {...prod}/>)}
        </StyledItemList>
    )
}
