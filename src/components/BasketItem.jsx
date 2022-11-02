import React from "react";

const BasketItem = (props) => {
  const { mainId, displayName, price, quantity } = props;
  return (
    <li className="collection-item ">
      {displayName} x {quantity} = {price}
      <button className="secondary-content">
        <i className="material-icons">delete</i>
      </button>
    </li>
  );
};

export { BasketItem };
