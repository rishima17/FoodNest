import React, { useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    // remove token from local storage
    localStorage.removeItem("token");

    // reset token in context
    setToken("");

    // navigate to home page (or login)
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search"></img>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="/" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />

            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>

              <hr />

              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
