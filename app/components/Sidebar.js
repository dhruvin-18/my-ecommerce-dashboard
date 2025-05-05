//components/Sidebar.js

import React from "react";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <img
          src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
          alt="GFG Logo"
        />
        <span className="text"> admin Panel</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-cart-add"></i>
            <span className="text">Orders</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-store"></i>
            <span className="text">Products</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-user"></i>
            <span className="text">Customers</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-chart"></i>
            <span className="text">Analytics</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
