import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../context/ProductContext";
import { useCart } from "../hooks/useCart";
import "./Header.scss";
import MegaMenu from "./MegaMenu";

const Header = () => {
  // const [burger, setBurger] = useState(false);
  const { setCartOpen } = useContext(productContext);
  const { totalPrice } = useCart();
  const menuItems = [
    { value: "Главная", href: "/", id: 1 },
    { value: "Избранные", href: "/favorites", id: 2 },
  ];


  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap pt-10 d-flex justify-between align-center">
          <Link to="/" className="header-logo">
            <img src="/img/Juma.png" />
          </Link>
          <MegaMenu menuItems={menuItems} />
          <ul className="d-flex">
            <li
              className="d-flex align-center cu-p"
              onClick={() => setCartOpen(true)}
            >
              <img style={{ marginRight: "10px" }} src="/img/card.svg" />
              <span>{totalPrice} сом</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
