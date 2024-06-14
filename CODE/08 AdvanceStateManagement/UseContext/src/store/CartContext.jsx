import { createContext,useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
    items: [],
    addUpdateCartItem: () => {}
  });

const CartContextProvider = ({children}) => {
<<<<<<< HEAD
  const initialCartData=localStorage.getItem("data")
  const [shoppingCart,setShoppingCart]=useState(initialCartData? JSON.parse(initialCartData):{items:[]});
  
  function handleCartItem(id, qty=1) {
    setShoppingCart((prev) => {
      const updatedItems = [...prev.items];
      const itemId = updatedItems.findIndex((item) => item.id === id);
      if (itemId === -1) {
        const product = DUMMY_PRODUCTS.find((item) => item.id === id);
        if (product) {
          updatedItems.push({
            id: id,
            img:product.image,
=======
  const [shoppingCart,setShoppingCart]=useState(
    {items:[]}
  );

  function handleCartItem(id, qty=1) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const itemIndex = updatedItems.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        if (product) {
          updatedItems.push({
            id: id,
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
            name: product.title,
            price: product.price,
            quantity: qty,
          });
        }
      } 
      else {
<<<<<<< HEAD
        updatedItems[itemId].quantity+=qty;
        if (updatedItems[itemId].quantity <= 0 || qty==0) {
          updatedItems.splice(itemId, 1); //remove item from list if qty is 0
        }
      }
      localStorage.setItem("data",JSON.stringify({items:updatedItems}))
=======
        updatedItems[itemIndex].quantity+=qty;
        if (updatedItems[itemIndex].quantity <= 0) {
          updatedItems.splice(itemIndex, 1);
        }
      }
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
      return {
        items: updatedItems,
      };
    });
 }
<<<<<<< HEAD
 const ctxValue={
  items:shoppingCart.items,
  addUpdateCartItem:handleCartItem,
=======

 const ctxValue={
  items:shoppingCart.items,
  addUpdateCartItem:handleCartItem
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
 };
 return (
  <CartContext.Provider value={ctxValue} >
    {children}
  </CartContext.Provider>
 )
}

export default CartContextProvider 