import React, { useEffect, useState } from "react";
import { handleUpdateStock } from "../../../controllers/submitController";

const Card = ({ item }) => {
  const [count, setCount] = useState(item.instock);

  const clickAdd = () => {
    setCount(count + 1);
  };

  const clickMi = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    handleUpdateStock(item, count);
  }, [count]);

  return (
    <div className="card">
      <div className="imgBox">
        <img src={item.photoURL} />
      </div>
      <div className="itemDetails">
        <h2>
          {item.name}
          <br />
          <span>{item.i_collection}</span>
        </h2>
        <h3>
          {item.price} Baht
          <br />
        </h3>
        <p>in stock: {count}</p>
        <div className="buttons">
          <button className="ad" onClick={clickAdd}>
            +
          </button>
          <button className="mi" onClick={clickMi}>
            -
          </button>
          {/*<button className="editBtn">Edit</button>*/}
          <button className="deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
