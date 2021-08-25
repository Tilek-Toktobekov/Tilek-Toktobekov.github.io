import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import { useCart } from "../hooks/useCart";
import EmptyCart from "../UI/EmptyCart";

const Drawer = () => {
  const { setCartOpen, cartProducts, removeProdCart } =
    useContext(productContext);
  const { totalPrice } = useCart();
  

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <button className="card-button" onClick={() => setCartOpen(false)}>
            <img width={11} height={11} src="/img/delete.svg" alt="delete" />
          </button>
        </h2>

        {cartProducts.length > 0 ? (
          <>
            <div className="cart-items">
              {cartProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="cart-item d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${prod.img})` }}
                    className="cart-item-img"
                  ></div>
                  <div className="flex mr-20">
                    <p className="mb-5">{prod.name}</p>
                    <b>{prod.price} сом</b>
                  </div>
                  <button
                    className="card-button"
                    onClick={() => removeProdCart(prod.id)}
                  >
                    <img src="/img/delete.svg" alt="" />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total-block">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} сом</b>
                </li>
                <li>
                  <span>Услуга: 5%</span>
                  <div></div>
                  <b>{totalPrice / 100 * 5} сом</b>
                </li>
              </ul>
              <button>Оформить заказ</button>
            </div>
          </>
        ) : (
          <EmptyCart
            title="Корзина пуста"
            desc="Добавьте хотябы один товар, чтобы сделать заказ"
            img="/img/empty.png"
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
