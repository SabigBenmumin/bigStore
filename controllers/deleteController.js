import { DeleteItem } from "../models/models";

export const handleDeleteItem = (id,name) => {
  DeleteItem(id);
  DeleteImg(name);
  //window.location.reload();
};
