import React from "react";
import { BasketItem } from "./BasketItem";

const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBacket = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <ul className="collection backet-list">
      <li className="collection-item grey darken-1 active ">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
            removeFromBacket={removeFromBacket}
          />
        ))
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}
      <li className="collection-item grey darken-1 active">{totalPrice}</li>
      <i className="material-icons basket_close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export { BasketList };
