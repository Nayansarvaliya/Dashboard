import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slidebar from "./components/Slidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Notes from "./components/Notes";
import Contacts from "./components/Contacts";
import Calendar from "./components/Calendar";
import Email from "./components/Email";
import Hotel from "./components/Hotel";
import News from "./components/News";
import "./app.css";



const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div>
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        <div style={{ display: "flex", marginTop: "60px" }}>
          {/* Sidebar */}
          {isSidebarVisible && <Slidebar />}

          {/* Main Content */}
          <div className="app-sec" style={{ flex: 1, marginLeft: isSidebarVisible ? "250px" : "0", padding: "0px", width: "80%"}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/email" element={<Email />} />
              <Route path="/hotel" element={<Hotel />} />
              <Route path="/news" element={<News />} />;

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
