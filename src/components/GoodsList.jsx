import React from "react";
import { GoodItem } from "./GoodItem";

const GoodsList = ({ goods, addGood }) => {
  return (
    <div className="goods">
      {!goods.lenrth ? (
        goods.map((good) => (
          <GoodItem key={good.mainId} {...good} addGood={addGood} />
        ))
      ) : (
        <h3>Nothing here</h3>
      )}
    </div>
  );
};

export { GoodsList };
