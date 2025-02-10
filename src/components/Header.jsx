import React from "react";
import logo from "../assets/logo.jpg"
const Header = () => {
  return(
    <div className="headerComponent">
    <div className="logo">
      <img className="header-logo" src={logo} alt="logo"></img>
    </div>
    <div className="search-container">
      <input className="input-search" type="text" placeholder="Search"></input>
      <button className="search-btn">Search</button>
    </div>
    <div className="list">
      <ul className="nav-items">
        <li className="list-item">Profile</li>
        <li className="list-item">Wishlist</li>
        <li className="list-item">Cart</li>
      </ul>
    </div>
    </div>
  )

}

export default Header;


