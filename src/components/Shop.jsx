import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { API_KEY, API_URL } from "../config.js";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

const Shop = () => {
  const { setGoods, loading, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop &&
          setGoods(
            data.shop.reduce((result, item) => {
              if (!result.find((i) => i.mainId === item.mainId)) {
                result.push(item);
              }
              return result;
            }, [])
          );
      });
  }, []);

  return (
    <div className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </div>
  );
};

export { Shop };
