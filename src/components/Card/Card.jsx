import React, { useContext, useState } from "react";
import { productContext } from "../../context/ProductContext";
import classes from "./Card.module.scss";

const Card = ({ item, addToCart, addToFavorit,favorited = false, added = false }) => {
  const [isFavorite, setIsFavorite] = useState(favorited);
  const { isItemAdded } = useContext(productContext)
  const obj = { id: item.id, parentId: item.id, name: item.name, img: item.img, price: item.price}
  const handleClickPlus = () => {
    addToCart(obj)
  };

  const handleClickFavorites = () => {
    setIsFavorite(!isFavorite)
    addToFavorit(obj)
  }

  return (
    <div key={item.id} className={classes.card}>
      <div onClick={handleClickFavorites} className={classes.favorite}>
        <img  src={isFavorite ? "/img/images.png" : "/img/heart.svg"} alt="" />
      </div>
      <img
        style={{ objectFit: "cover" }}
        width={133}
        height={112}
        src={item.img}
        alt="moon"
      />
      <p>{item.name}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <h5 style={{ margin: "0" }}>Цена: </h5>
          <b>{Number(item.price)} сом</b>
        </div>
        <button
          onClick={handleClickPlus}
          className={ isItemAdded(item.id) ? classes["active"] : classes["card-button"]}
        >
          <img
            className={classes.plus}
            width={16}
            height={16}
            src={ isItemAdded(item.id) ? "/img/check.svg" : "/img/card.svg"}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
