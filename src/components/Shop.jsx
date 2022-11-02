import React, { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { API_KEY, API_URL } from "../config.js";
import { GoodsList } from "./GoodsList";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
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
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
      <button></button>
    </div>
  );
};

export { Shop };
