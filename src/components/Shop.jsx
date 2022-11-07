import React, { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { API_KEY, API_URL } from "../config.js";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addGood = (good) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === good.mainId
    );

    if (itemIndex < 0) {
      const newGood = { ...good, quantity: 1 };
      setOrder([...order, newGood]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const removeFromBacket = (itemId) => {
    const newOrder = order.filter((item) => item.mainId !== itemId);
    setOrder(newOrder);
  };

  const plusQuantity = (itemId, n) => {
    const newOrder = order.map((item) => {
      if (item.mainId === itemId) {
        const newQuantity = item.quantity + n;
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(
          data.shop &&
            data.shop.reduce((result, item) => {
              if (!result.find((i) => i.mainId === item.mainId)) {
                result.push(item);
              }
              return result;
            }, [])
        );
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addGood={addGood} />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBacket={removeFromBacket}
          plusQuantity={plusQuantity}
        />
      )}
    </div>
  );
};

export { Shop };
