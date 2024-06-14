import { createContext,useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
export const CartContext = createContext({
    items: [],
    addUpdateCartItem: () => {}
  });

function shoppingCartReducer(state,action){
  if(action.type==='ADD_UPDATE_ITEM'){
      const updatedItems = [...state.items];
      const itemIndex = updatedItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex === -1) {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
        if (product) {
          updatedItems.push({
            id: action.payload.id,
            name: product.title,
            price: product.price,
            quantity: action.payload.qty,
          });
        }
      } 
      else {
        updatedItems[itemIndex].quantity+=action.payload.qty;
        if (updatedItems[itemIndex].quantity <= 0) {
          updatedItems.splice(itemIndex, 1);
        }
      }
      return {
        ...state,  //not required now
        items: updatedItems,
      };
    }
  }
ed
const CartContextProvider = ({children}) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleCartItem(id, qty=1) {
    shoppingCartDispatch({
      type:'ADD_UPDATE_ITEM',
      payload:{id,qty}
    })
  }

  
 const ctxValue={
  items:shoppingCartState.items,
  addUpdateCartItem:handleCartItem,
 };
 return (
  <CartContext.Provider value={ctxValue} >
    {children}
  </CartContext.Provider>
 )
}

export default CartContextProvider 