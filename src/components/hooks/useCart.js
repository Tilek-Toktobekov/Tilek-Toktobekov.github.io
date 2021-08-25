import React, { useContext } from 'react';
import { productContext } from '../../context/ProductContext';


export const useCart = () => {
  const { cartProducts, setCartProducts } = useContext(productContext);
  const totalPrice = cartProducts.reduce((sum, currentEl) =>  Number(currentEl.price) + sum, 0);

  return { cartProducts, setCartProducts, totalPrice}
} 
