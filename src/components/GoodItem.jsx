import React from "react";

const GoodItem = (good) => {
  const { /* mainId, */ displayName, displayDescription } = good;
  const { background } = good.displayAssets[0];
  const price = good.price.regularPrice;
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
          <button className="btn blue-grey darken-4">Купить</button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            {price} руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export { GoodItem };
