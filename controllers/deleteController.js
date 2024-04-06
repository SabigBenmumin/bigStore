import { DeleteItem } from "../models/models";

export const handleDeleteItem = (id) => {
  DeleteItem(id);
  //window.location.reload();
};
