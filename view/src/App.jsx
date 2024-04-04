import { useState } from "react";
import { handlesSubmitItem } from "../../controllers/submitController";

function App() {
  const Submit = async (e) => {
    e.preventDefault();
    const itemName = e.target[0].value;
    const itemPrice = e.target[1].value;
    const inStock = e.target[2].value;
    await handlesSubmitItem(itemName, itemPrice, inStock);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Big Store</span>
        <span className="title">add data</span>
        <form onSubmit={Submit}>
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Item Price" />
          <input type="number" placeholder="In Stock" />
          <button>Add to store</button>
        </form>
      </div>
    </div>
  );
}

export default App;
