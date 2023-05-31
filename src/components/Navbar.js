import React, { useState } from "react";
import Logo from "../assets/starwarsLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Button from "../assets/button.png"

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="logo-pica" />
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       </div>
      <div className="rightSide">
        <Link to="/"> Domov </Link>
        <Link to="/filmi"> Filmi </Link>
        <Link to="/karakteri"> Karakteri </Link>
        <Link to="/contact"> Kontakt </Link>
        <button onClick={toggleNavbar}>
          <img src={Button} alt="Button" className="navbar-size" />
        </button>        
      </div>
    </div>
  );
}

export default Navbar;