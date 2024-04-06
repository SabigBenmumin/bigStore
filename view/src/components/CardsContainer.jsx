import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../models/firebase";
import Card from "./Card";

const CardsContainer = () => {
  const [items, setItems] = useState([]);
  const itemsRef = collection(db, "items");
  //const ref = useRef();

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemsRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  return (
    <div className="cardscontainer">
      {items.map((i) => (
        <Card item={i} key={i.i_id} />
      ))}
    </div>
  );
};

export default CardsContainer;
