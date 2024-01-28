import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.avif";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/dropdown.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open')
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
       <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            Home
          </Link>{" "}
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("airbuds");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/airbuds">
            Airbuds
          </Link>{" "}
          {menu === "airbuds" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("neckband");
          }}
        >
          {" "}
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/neckband"
          >
            Nackband
          </Link>
          {menu === "neckband" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("trimmer");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/trimmer">
            Trimmer
          </Link>{" "}
          {menu === "trimmer" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
