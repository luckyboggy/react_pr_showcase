import React from "react";

const BasketItem = (props) => {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBacket = Function.prototype,
  } = props;
  return (
    <li className="collection-item ">
      {displayName} x {quantity} = {price * quantity} руб.
      <span
        onClick={() => removeFromBacket(mainId)}
        className="secondary-content"
      >
        <i className="material-icons">delete</i>
      </span>
    </li>
  );
};

export { BasketItem };
