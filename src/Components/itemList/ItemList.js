import Item from '../../item'
import React from 'react'
const ItemList = ({products}) => {
    return(
        <div>
        {products.map((product)=> <Item key={product.id} product={product}/>)}
      </div>
    )
}
export default ItemList