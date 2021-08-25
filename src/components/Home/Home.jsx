import React, { useContext, useEffect, useState } from "react";
import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import Card from "../Card/Card";
import { productContext } from "../../context/ProductContext";

const Home = () => {
  const {
    getProduct,
    getProdCart,
    products,
    cartProducts,
    setCartProducts,
    removeProdCart,
    addToCart,
    addToFavorit,
    setFavorites,
    cartOpen,
    setCartOpen,
    searchProduct,
    setSearchProduct,
    getFavoriteProd,
    setIsLoading,
    isLoading,
    isItemAdded
  } = useContext(productContext);

  useEffect(() => {
    setIsLoading(true)
    getProdCart();
    getFavoriteProd();
    getProduct();
    setIsLoading(false)
  }, []);

  const renderCard = () => {
    const filtered = products.filter((prod) => prod.name.toLowerCase().includes(searchProduct))
    return (isLoading ? [...Array(0)] : filtered)
      .map((item) => (
        <Card
          key={item.id}
          item={item}
          addToCart={addToCart}
          addToFavorit={addToFavorit}
          loading={isLoading}
        />
      ));
  };

  const onChangeInput = (e) => {
    setSearchProduct(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpen ? (
        <Drawer
        // cartProducts={cartProducts}
        // closeDrawer={setCartOpen}
        // removeProdCart={removeProdCart}
        />
      ) : null}
      <Header />
      <main className="main-content">
        <section className="product-content">
          <div className="container">
            <div className="block">
              <h1>
                {searchProduct
                  ? `Поиск по запросу '${searchProduct}'`
                  : "Все товары"}
              </h1>
              <div className="search-block">
                <input
                  onChange={onChangeInput}
                  value={searchProduct}
                  type="text"
                  placeholder="Поиск"
                />
                {searchProduct ? (
                  <img
                    onClick={() => setSearchProduct("")}
                    src="/img/delete.svg"
                    alt=""
                  />
                ) : null}
              </div>
            </div>
            <div className="d-flex flex-wrap justify-around">
              {renderCard()}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
