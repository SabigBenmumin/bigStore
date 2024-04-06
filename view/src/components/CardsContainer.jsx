import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../models/firebase";

const CardsContainer = () => {
  const [items, setItems] = useState([]);
  const itemsRef = collection(db, "items");

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemsRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  return (
    <div className="cardscontainer">
      {items.map((item) => {
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
              <p>in stock: {item.instock}</p>
              <div className="buttons">
                <button className="ad">+</button>
                <button className="mi">-</button>
                <button className="editBtn">Edit</button>
                <button className="deleteBtn">Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
