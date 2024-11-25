import React from "react";
import img1 from "../Images/profile-img..png";

const Dashboard = () => {
  return (
    <div>
      <h5 className="fw-bold">DASHBOARD</h5>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="admin-profile">
                <div className="card p-3">
                  <div className="admin-title d-flex justify-content-center">
                    <div className="admin-title-left">
                      <h5>Welcome Back !</h5>
                      <p>Skote Dashboard</p>
                    </div>
                    <div className="admin-title-right">
                      <img src={img1} alt="" className="w-75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
