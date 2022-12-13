import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";

const Alert = () => {
  const { alertName: name = "", closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div className="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
};

export { Alert };
