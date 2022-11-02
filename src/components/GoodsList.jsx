import React from "react";
import { GoodItem } from "./GoodItem";

const GoodsList = ({ goods }) => {
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
