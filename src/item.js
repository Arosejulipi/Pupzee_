import React from "react";
import { Link } from "react-router-dom";
const Item = () =>{
    return(
        <div>
            <Link to={"/itemDetail"}>Producto</Link>
        </div>
    )
}
export default Item