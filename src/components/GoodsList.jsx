import React, { useContext } from "react";
import { ShopContext } from "../context";
import { GoodItem } from "./GoodItem";

const GoodsList = () => {
  const { goods } = useContext(ShopContext);

  return (
    <div className="goods">
      {!goods.lenrth ? (
        goods.map((good) => <GoodItem key={good.mainId} {...good} />)
      ) : (
        <h3>Nothing here</h3>
      )}
    </div>
  );
};

export { GoodsList };
