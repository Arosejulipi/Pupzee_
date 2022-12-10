import React from "react";

import ItemListContainer from "../itemListContainer/ItemListContainer";
import product from "../itemList/ItemList"
const ItemDetailContainer = () => {

    return (
    <div>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <img src={product.image}></img>
        <h3>{product.price}</h3>
        </div>
    )
}
export default ItemDetailContainer