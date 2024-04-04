import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "./firebase";

export const createItem = (item) => {
  setDoc(doc(db, "items", uuid()), {
    name: item.name,
    price: item.price,
    instock: item.countStock,
  });
};
