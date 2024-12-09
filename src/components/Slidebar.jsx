import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNotesMedical, FaUserFriends, FaCalendarAlt, FaEnvelope, FaHotel, FaNewspaper,  FaCloudSun} from "react-icons/fa";
import "./Slidebar.css";

const Slidebar = ({ isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
      <nav className="pt-5">
        <ul>
          <li>
            <Link to="/">
              <FaHome /> <span className="menu-text">Dashboards</span>
            </Link>
          </li>
          <li>
            <Link to="/notes">
              <FaNotesMedical /> <span className="menu-text">Notes</span>
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <FaUserFriends /> <span className="menu-text">Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <FaCalendarAlt /> <span className="menu-text">Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="/email">
              <FaEnvelope /> <span className="menu-text">Email</span>
            </Link>
          </li>
          <li>
            <Link to="/hotel">
              <FaHotel /> <span className="menu-text">Hotel</span>
            </Link>
          </li>
          <li>
            <Link to="/news">
              <FaNewspaper /> <span className="menu-text">News</span>
            </Link>
          </li>
          <li>
            <Link to="/weather">
              <FaCloudSun /> <span className="menu-text">Weather</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Slidebar;
