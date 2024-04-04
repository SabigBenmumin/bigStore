import { createItem } from "../models/models";

export const handlesSubmitItem = (nme, prce, countStck) => {
  let item = {
    name: nme,
    price: prce,
    countStock: countStck,
  };
  createItem(item)
};
