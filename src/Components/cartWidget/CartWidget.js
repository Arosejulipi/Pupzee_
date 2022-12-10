
import "./cartWidget.css"
import { BsCart4} from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="carrito">
      <BsCart4/>
      <div className="numero-carrito">
<button>-</button>
<a>0</a>
<button>+</button>
</div>
    </div>
  );
};
export default CartWidget