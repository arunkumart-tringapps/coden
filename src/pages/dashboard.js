import React from "react";
import Navbar from "../components/Navbar";
import './dashboard.css'
export default function Dashboard() {
  return (
    <div className="container">
      <div className="Container-dash">
        <Navbar />
      </div>
      <div className="search-bar">
        <svg className="search-icon"></svg>
        <input type="text" className="text" placeholder="Search your project here" />
      </div>
      <button class="add-button" id="plus-icon">Add project</button>
      <svg className="notification"></svg>
      <svg className="acc-logo"></svg>
      <div className="dash-title">
        <h2> DASHBOARD</h2>
      </div>
    </div>
  );
}
