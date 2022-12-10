import React from "react";
import { Link } from "react-router-dom";

const Item = ({product}) =>{
    return(
        <div>
           
         <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <img src={product.image} alt={product.title}/>
        <h3>{product.price}</h3>
       
            <Link to={`/itemDetail/${product.id}`}>Mas detalle</Link>
        </div>
    )
}
export default Item