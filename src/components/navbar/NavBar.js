import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.jpeg";
import "./Navbar.css";
export default function NavBar() {
  return <div className="navbar">
      <div className="navbarLogo">
        <img src={Logo} alt="logoImage"/>
      </div>
      <div className="navbarLinks">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link> 
      </div>
</div>;
 
}
