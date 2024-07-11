import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { BookItem, ShoppingCart } from '../types/types';
// import { ShoppingCart } from '../models/ShoppingCart';

// Define action types
type Action =
  | { type: 'ADD_BOOK'; book: BookItem }
  | { type: 'UPDATE_QUANTITY'; book: BookItem; quantity: number }
  | { type: 'CLEAR_CART' };

// Define the initial state
const initialState: ShoppingCart = new ShoppingCart();

// Create the reducer function

const cartReducer = (state: ShoppingCart, action: Action): ShoppingCart => {
  switch (action.type) {
    case 'ADD_BOOK':
      console.log('Add----');
      state.addBook(action.book);
      return Object.assign(new ShoppingCart(), { ...state });
    case 'UPDATE_QUANTITY':
      // Pending code in next project...
    case 'CLEAR_CART':
      // Pending code in next project...
    default:
      return state;
  }
};

// Create context
interface CartContextType {
  cart: ShoppingCart;
  dispatch: React.Dispatch<Action>;
}

const CartContext = createContext<CartContextType>({ cart: initialState, dispatch: () => null });

// Create provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create custom hook to use shopping cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


  
