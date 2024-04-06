import { createItem } from "../models/models";
import { v4 as uuid } from "uuid";

export const handlesSubmitItem = (nme, colec, prce, countStck, fle) => {
  let item = {
    _id: uuid(),
    name: nme,
    item_collection: colec,
    price: prce,
    countStock: countStck,
    file: fle
  };
  createItem(item)
};