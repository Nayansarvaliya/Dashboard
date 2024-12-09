import React from "react";
import img2 from "../Images/user4.jpg";
import img3 from "../Images/charts.gif";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <h5>DASHBOARD</h5>
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="profile-sec">
                  <h6>Welcome Back !</h6>
                  <p>Skote Dashboard</p>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="profile-left">
                        <img src={img2} alt="" />
                        <h6 className="pt-2">Henry Price</h6>
                        <p>Web Developer</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="profile-left">
                        <h6 className="pt-2">125</h6>
                        <p>Projects</p>
                        <div className="profile-btn">
                          <a href="#" className="btn btn-primary">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="profile-left">
                        <h6 className="pt-2">$1245</h6>
                        <p>Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="profile-sec mt-3">
                  <h6>Monthly Earning</h6>
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="earning-sec">
                        <p>This Month</p>
                        <h5>$34,252</h5>
                        <p>
                          <span>
                            12%{" "}
                            <i class="fa-solid fa-arrow-up text-success me-1"></i>
                          </span>
                          From previous period
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="earning-sec"></div>
                    </div>
                  </div>
                  <div className="profile-btn">
                    <a href="#" className="btn btn-primary">
                      View More
                    </a>
                  </div>
                  <p className="pt-2">
                    We craft digital, graphic and dimensional thinking.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="profile-sec mt-3">
                  <h6>Social Source</h6>
                  <div className="social-sec text-center">
                    <div className="social-icon">
                      <span>
                        <i class="fa-brands fa-facebook"></i>
                      </span>
                    </div>
                    <h6 className="pt-2">
                      <a href="#">Facebook</a>
                      <span className="text-white-50"> - 125 Sales</span>
                    </h6>
                    <p className="text-white-50">
                      Maecenas nec odio et ante tincidunt tempus. Donec vitae
                      sapien ut libero venenatis faucibus tincidunt.
                    </p>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="social-icon-top">
                          <i class="fa-brands fa-facebook"></i>
                          <h6 className="pt-2">Facebook</h6>
                          <p className="text-white-50">125 Sales</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="social-icon-midle">
                          <i class="fa-brands fa-facebook"></i>
                          <h6 className="pt-2">Twiter</h6>
                          <p className="text-white-50">112 Sales</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="social-icon-bottom">
                          <i class="fa-brands fa-facebook"></i>
                          <h6 className="pt-2">Instagram</h6>
                          <p className="text-white-50">104 Sales</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-5">
            <div className="row">
              <div className="col-lg-11 ms-2">
                <div className="row">
                  <div className="col-md-4 profile-sec p-3">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="profile-left">
                          <p>Orders</p>
                          <h5>1,235</h5>
                        </div>
                      </div>
                      {/* <div className="col-lg-5">
                        <div className="profile-right pt-2">
                          <i class="fa-solid fa-file-pdf"></i>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-4 profile-sec ">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="profile-left">
                          <p>Revenue</p>
                          <h5>$35, 723</h5>
                        </div>
                      </div>
                      {/* <div className="col-lg-5">
                        <div className="profile-right pt-2">
                          <i class="fa-solid fa-cloud-arrow-down"></i>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-4 profile-sec p-3">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="profile-left">
                          <p>Average Price</p>
                          <h5>$16.2 </h5>
                        </div>
                      </div>
                      {/* <div className="col-lg-5">
                        <div className="profile-right pt-2">
                          <i class="fa-solid fa-tag"></i>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 pt-3">
                <div className="profile-sec">
                  <h6>Email Sent</h6>
                  <div className="profile-img">
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 pt-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="profile-sec">
                      <h6 className="pb-3">Activity</h6>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="activity-left">
                                {/* <i class="fa-solid fa-arrow-right"></i> */}
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="activity-center">
                                <p>17 Nov</p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="activity-right">
                                <p className="text-white-50">
                                Everyone realizes why a new common language would be desirable... Read More
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="activity-left">
                                
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="activity-center">
                                <p>15 Nov</p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="activity-right">
                                <p className="text-white-50">
                                Joined the group “Boardsmanship Forum”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="activity-left">
                                {/* <i class="fa-solid fa-arrow-right"></i> */}
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="activity-center">
                                <p>17 Nov</p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="activity-right">
                                <p className="text-white-50">
                                  Responded to need “Volunteer Activities”
                                </p>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-sec">
                      <h6>Top Cities Selling Product</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
