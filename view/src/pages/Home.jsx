import React from "react";
import CardsContainer from "../components/CardsContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <header>
          <div className="title">Home</div>
          <button className="Newbutton">
            <Link className="addbutton" to="/additem">
              Add +
            </Link>
          </button>
        </header>
        <div className="content">
          <CardsContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
