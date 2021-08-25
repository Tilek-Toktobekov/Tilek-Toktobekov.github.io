import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import Card from "../Card/Card";
import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";

const Favorites = () => {
  const {
    favorites,
    getFavoriteProd,
    addToCart,
    addToFavorit,
    cartOpen,
    cartProducts,
    setCartOpen,
    removeProdCart,
  } = useContext(productContext);

  // useEffect(() => {
  //   getFavoriteProd();
  // }, []);

  return (
    <div className="wrapper clear">
      <Header />
      {cartOpen ? (
        <Drawer
          // cartProducts={cartProducts}
          // closeDrawer={setCartOpen}
          // removeProdCart={removeProdCart}
        />
      ) : null}
      <main className="main-content">
        <section className="favorites-content">
          <div className="container">
            <div className="block">
              <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
              {favorites.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                  addToFavorit={addToFavorit}
                  favorited={true}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Favorites;
