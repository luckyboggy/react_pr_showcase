import React, { useContext } from "react";
import { ShopContext } from "../context";

const BasketItem = (props) => {
  const { mainId, displayName, price, quantity } = props;

  const { removeFromBacket, plusQuantity } = useContext(ShopContext);

  return (
    <li className="collection-item ">
      {displayName}{" "}
      <i
        onClick={() => plusQuantity(mainId, -1)}
        className="material-icons basket-quantity"
      >
        remove
      </i>{" "}
      x {quantity}
      <i
        onClick={() => plusQuantity(mainId, 1)}
        className="material-icons basket-quantity"
      >
        add
      </i>{" "}
      = {price * quantity} руб.
      <span
        onClick={() => removeFromBacket(mainId)}
        className="secondary-content"
      >
        <i className="material-icons delete">delete</i>
      </span>
    </li>
  );
};

export { BasketItem };
