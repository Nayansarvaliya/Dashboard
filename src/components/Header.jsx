import React, { useState } from "react";
import { FaBars, FaSearch, FaBell, FaCog } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import "./Header.css";
import img2 from "../Images/user4.jpg";

const Header = ({ toggleSidebar }) => {
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <h2>SKOTE</h2>
        </div>

        <div className="header-menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </div>

      <div className="header-center">
        <div className="header-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="header-mega-menu">
          <span>Mega Menu</span>
        </div>
      </div>

      <div className="header-right">
        {/* <div className="header-flag">
          <img
            src="https://flagcdn.com/us.svg"
            alt="Flag"
            style={{ width: "20px", height: "15px" }}
          />
        </div> */}

        {/* <div className="header-icon">
          <IoGridOutline />
        </div> */}

        {/* Fullscreen Icon */}
        <div className="header-icon">
          <MdFullscreen />
        </div>

        {/* Notifications */}
        {/* <div className="header-notification">
          <FaBell />
          {notifications > 0 && <span className="notification-badge">{notifications}</span>}
        </div> */}

        {/* Admin Profile */}
        <div className="header-profile">
          <img
            src={img2}
            alt="Admin"
            className="profile-avatar"
          />
          <span>Admin</span>
        </div>

        <div className="header-icon">
          <FaCog />
        </div>
      </div>
    </header>
  );
};

export default Header;
