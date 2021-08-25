import React, { useState } from "react";
import axios from "axios";
import { API } from "../helpers/constants";
export const productContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getProdCart = async () => {
    try {
      const { data } = await axios(`${API}/cart`);
      setCartProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavoriteProd = async () => {
    try {
      const { data } = await axios(`${API}/favorites`);
      setFavorites(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const { data } = await axios(`${API}/products`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeProdCart = async (id) => {
    try {
      await axios.delete(`${API}/cart/${id}`);
      setCartProducts((prev) => prev.filter((prev) => prev.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  
  const addToCart = async (item) => {
    try {
      if (
        cartProducts.find((product) => Number(product.id) === Number(item.id))
      ) {
        setCartProducts((prev) => prev.filter((el) => el.id !== item.id));
        await axios.delete(`${API}/cart/${item.id}`);
      } else {
        setCartProducts((prev) => [...prev, item]);
        await axios.post(`${API}/cart`, item);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorit = async (item) => {
    try {
      if (
        favorites.find((favorite) => Number(favorite.id) === Number(item.id))
      ) {
        setFavorites((prev) => prev.filter((prev) => prev.id !== item.id));
        axios.delete(`${API}/favorites/${item.id}`);
      } else {
        const { data } = await axios.post(`${API}/favorites`, item);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isItemAdded = (id) => {
    return cartProducts.some((cartProd) => Number(cartProd.parentId) === Number(id));
  };

  return (
    <productContext.Provider
      value={{
        cartOpen: cartOpen,
        searchProduct: searchProduct,
        products: products,
        favorites: favorites,
        cartProducts: cartProducts,
        isLoading: isLoading,
        setSearchProduct,
        setCartOpen,
        setCartProducts,
        getProduct,
        getProdCart,
        removeProdCart,
        addToCart,
        addToFavorit,
        getFavoriteProd,
        setIsLoading,
        isItemAdded,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
