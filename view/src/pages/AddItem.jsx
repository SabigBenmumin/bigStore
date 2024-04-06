import React from "react";
import { handlesSubmitItem } from "../../../controllers/submitController";
import { useNavigate } from "react-router-dom";
import Add from "../images/img_icon.png";

const AddItem = () => {
  
  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();
    const itemName = e.target[0].value;
    const itemCol = e.target[1].value;
    const itemPrice = e.target[2].value;
    const inStock = e.target[3].value;
    const file = e.target[4].files[0];
    handlesSubmitItem(itemName, itemCol, itemPrice, inStock, file);
    navigate("/")
  };

  const Back = () => {
    navigate("/")
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo" onClick={Back}>Big Store</span>
        <form onSubmit={Submit}>
          <input type="text" placeholder="Item Name" />
          <input type="text" placeholder="Collection" />
          <input type="number" placeholder="Item Price (Baht)" />
          <input type="number" placeholder="In Stock" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add Item Image</span>
          </label>
          <button>Add to store</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;