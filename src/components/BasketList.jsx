import React, { useContext } from "react";
import { ShopContext } from "../context";
import { BasketItem } from "./BasketItem";

const BasketList = () => {
  const { order, handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div
      className="basket"
      onClick={(event) => {
        if (event.target.className === "basket") {
          handleBasketShow();
        }
      }}
    >
      <ul className="collection backet-list">
        <li className="collection-item grey darken-1 active ">Корзина</li>
        {order.length ? (
          order.map((item) => <BasketItem key={item.mainId} {...item} />)
        ) : (
          <li className="collection-item ">Корзина пуста</li>
        )}
        <li className="collection-item grey darken-1 active basket_down">
          Общая стоимость: {totalPrice} руб.
          <button className="secondary-content btn blue-grey darken-4">
            Оформить
          </button>
        </li>
        <i className="material-icons basket_close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
};

export { BasketList };
