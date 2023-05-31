import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/frontpage.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
       <h1>  Kinoteka Srečkovič </h1>
        <p> Kar želiš to dobiš</p>
        <Link to="/Filmi">
          <button> Poglej ponudbo </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

