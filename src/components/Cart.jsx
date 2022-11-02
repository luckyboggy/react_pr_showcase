import React from "react";

const Cart = (props) => {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="cart brown lighten-1 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart_quantity">{quantity}</span> : null}
    </div>
  );
};

export { Cart };
