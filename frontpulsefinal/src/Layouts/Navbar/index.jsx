import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          Pulse<span>.</span>
        </div>
        <div className="navbar__container__items">
          <ul className="navbar__container__items__list">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/AddPage"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Add Page</li>
            </NavLink>
            <NavLink
              to={"/WishList"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>WishList</li>
            </NavLink>
            <li>About Us</li>
            <li>Restaraunt</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar__container__reserv">
          <span>Reservations</span>
          <i className="fa-solid fa-phone"></i> 652-345 3222 11
        </div>
        <div className="navbar__container__menu">
        <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
