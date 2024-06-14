import { useContext } from "react";
<<<<<<< HEAD
import { CartContext } from '../store/CartContext';
import deleteIcon from '../assets/delete.png';
import '../index.css'

export default function Cart() {
  const {items,addUpdateCartItem} =useContext(CartContext)
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity,0);
=======
import {CartContext} from '../store/CartContext'

export default function Cart() {
  const {items,addUpdateCartItem} =useContext(CartContext)
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,0
  );
  const formattedTotalPrice = `${totalPrice.toFixed(2)}`;

>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
<<<<<<< HEAD
            return (
              <li key={item.id}>
                <div style={{display:"flex"}}>
                  <img style={{padding: ".5em",borderRadius: "11px"}}src={item.img} height="50"alt="" />
                  <span style={{padding: "6px"}}>{item.name}</span>
                  <span style={{paddingTop:"1em"}}>{totalPrice.toFixed(2)}</span>
=======
            const formattedPrice = `$${item.price.toFixed(2)}`;
            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => addUpdateCartItem(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addUpdateCartItem(item.id, 1)}>+</button>
<<<<<<< HEAD
                  <img  onClick={() => addUpdateCartItem(item.id, 0)} src={deleteIcon} alt="" />
=======
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
<<<<<<< HEAD
        Cart Total: <strong>{totalPrice.toFixed(2)}</strong>
=======
        Cart Total: <strong>{formattedTotalPrice}</strong>
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
      </p>
    </div>
  );
}
