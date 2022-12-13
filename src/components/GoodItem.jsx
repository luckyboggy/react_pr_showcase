import React, { useContext } from "react";
import { ShopContext } from "../context";

const GoodItem = (props) => {
  const { mainId, displayName, displayDescription } = props;
  const { background } = props.displayAssets[0];
  const price = props.price.regularPrice;

  const { addGood } = useContext(ShopContext);

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button
            className="btn blue-grey darken-4"
            onClick={() =>
              addGood({
                mainId,
                displayName,
                price,
              })
            }
          >
            Купить
          </button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            {price} руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export { GoodItem };
