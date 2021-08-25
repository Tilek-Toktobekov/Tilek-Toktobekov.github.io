import React from "react";

const EmptyCart = ({ title, desc, img }) => {
  return (
    <div className="cart-empty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} height={120} src={img} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default EmptyCart;
