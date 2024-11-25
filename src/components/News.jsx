import { ListItemIcon } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./News.css";
import img2 from "../Images/news.jpg";
import img3 from "../Images/voice3.webp";
import img4 from "../Images/voice4.webp";
import img5 from "../Images/voice5.webp";

const News = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    let fetchApiData = async () => {
      let url = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f522c11eb39149b28a397dd6324b826c"
      );

      let data = await url.json();

      setArticles(data.articles);
    };
    fetchApiData();
  }, []);
  return (
    <>
      <div>
        <div className="container">
          <h5 className="btn btn-danger">TRENDING NOW</h5>
          <div className="row">
            {/* News Section */}
            <div className="col-lg-8 col-md-7 col-sm-12">
              <h2 className="news-h2">TOP 10 LATEST NEWS</h2>
              {articles.slice(0, 10).map((value, index) => (
                <div className="card mb-4 shadow-sm" key={index}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={
                          value.urlToImage || "https://via.placeholder.com/150"
                        }
                        alt={value.title}
                        className="img-fluid rounded-start"
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p
                          className="card-text text-truncate"
                          style={{ maxHeight: "4rem" }}
                        >
                          {value.description || "No description available."}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Published on:{" "}
                            {value.publishedAt }
                          </small>
                        </p>
                        <a
                          href={value.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Section */}
            <div className="col-lg-4 col-md-5 col-sm-12 ">
              <h2 className="news-h2">FOLLOW US</h2>
              <div className="follow-sec bg-white p-2">
                <div className="news-follow p-3 mb-3 border">
                  <div className="news-left d-flex">
                    <i className="fa-brands fa-facebook-f me-4"></i>
                    <div className="news-right">
                      <h5 className="d-flex">12,345 Fans</h5>
                    </div>
                  </div>
                </div>
                <div className="news-follow1 p-3 mb-3 border">
                  <div className="news-left d-flex">
                    <i class="fa-brands fa-twitter me-4"></i>
                    <div className="news-right">
                      <h5 className="d-flex">12,345 Followers</h5>
                    </div>
                  </div>
                </div>
                <div className="news-follow2 p-3 mb-3 border">
                  <div className="news-left d-flex">
                    <i class="fa-brands fa-linkedin me-4"></i>
                    <div className="news-right">
                      <h5 className="d-flex">12,345 Connects</h5>
                    </div>
                  </div>
                </div>
                <div className="news-follow3 p-3 mb-3 border">
                  <div className="news-left d-flex">
                    <i class="fa-brands fa-instagram me-4"></i>
                    <div className="news-right">
                      <h5 className="d-flex">12,345 Followers</h5>
                    </div>
                  </div>
                </div>
                <div className="news-follow4 p-3 mb-3 border">
                  <div className="news-left d-flex">
                    <i class="fa-brands fa-youtube me-4"></i>
                    <div className="news-right">
                      <h5 className="d-flex">12,345 Subscribers</h5>
                    </div>
                  </div>
                </div>
                <div className="news-follow5 p-3 mb-3 border">
                  <div className="news-left d-flex">
                    <i class="fa-brands fa-vimeo-v me-4"></i>
                    <div className="news-right">
                      <h5 className="d-flex">12,345 Followers</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-3 pb-3">
                <h2 className="news-h2">ADVERTISEMENT</h2>
                <div className="Advertisement-sec bg-white p-3">
                  <img src={img2} alt="" className="w-100"/>
                </div>
              </div>
              <div className="pt-3 pb-3">
                <h2 className="news-h2">NEWSLETTER</h2>
                <div className="Advertisement-sec bg-white p-3 text-center">
                  <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                  <div className="form-sec pb-3">
                  <form>
                    <input type="text" placeholder="Your Email" className="form-sec1 p-2"/>
                    <input type="submit" className="form-sec2 p-2"/>
                  </form>
                  </div>
                  <p>Lorem ipsum dolor sit amet elit</p>
                </div>
              </div>
              <div className="pt-3 pb-3">
                <h2 className="news-h2">TAGS</h2>
                <div className="Tags-sec bg-white p-3 d-flex">
                  <span className="me-3  border p-1">Politics</span>
                  <span className="me-3 border p-1">Business</span>
                  <span className="me-3 border p-1">Corporate</span>
                  <span className="me-3 border p-1">Business</span>
                  </div>
                 
                  
              </div>
              <div className="pt-3 pb-3">
              <h2 className="news-h2">FEATURES POSTS</h2>
              <div className="features-sec bg-white p-3">
                <div className="features d-flex pb-2">
                  <div className="features-left me-3 pt-2">
                    <img src={img3} alt="" />
                  </div>
                  <div className="features-right">
                    <h6 className="text-danger">Environment</h6>
                    <h5>Solar Energy for Mother Earth and Everyday Smiles</h5>
                  </div>
                </div>
                <div className="features d-flex pb-2">
                  <div className="features-left me-3 pt-2">
                    <img src={img3} alt="" className=""/>
                  </div>
                  <div className="features-right">
                    <h6 className="text-danger">Lifestyle</h6>
                    <h5>Solar Energy for Mother Earth and Everyday Smiles</h5>
                  </div>
                </div>
                <div className="features d-flex pb-2">
                  <div className="features-left me-3 pt-2">
                    <img src={img5} alt="" />
                  </div>
                  <div className="features-right">
                    <h6 className="text-danger">Fashion</h6>
                    <h5>Solar Energy for Mother Earth and Everyday Smiles</h5>
                  </div>
                </div>
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
