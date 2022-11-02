import React from "react";
import { BasketItem } from "./BasketItem";

const BasketList = (props) => {
  const { order = [], handleBasketShow = Function.prototype } = props;
  return (
    <ul className="collection backet-list">
      <li className="collection-item grey darken-1 active ">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}
      <li className="collection-item grey darken-1 active">Общая стоимость:</li>
      <i className="material-icons basket_close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export { BasketList };
