import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const{all_product,cartItems,addToCart,removeFromCart,deleteFromCart,getTotalCartAmount}=useContext(ShopContext)
    
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
     {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return(
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='cartitems-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div>
                <span onClick={()=>{addToCart(e.id)}}>+</span>
                  <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                  <span onClick={()=>{removeFromCart(e.id)}}>-</span>
                </div>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{deleteFromCart(e.id)}} alt="" />
              </div>
              <hr />
            </div>
            )
            }
     })}
     
     <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
          <div className="cartitems-total-items">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cartitems-total-items">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr/>
          <div className="cartitems-total-items">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button>Proceed To Checkout</button>
      </div>
      <div className="cartitems-promocode">
        <p>If you have any promo code , Enter it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='PromoCode' />
          <button>Submit</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default CartItems