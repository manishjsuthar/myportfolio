import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [random, setrandom] = useState([]);

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = () => {
    fetch("https://myportfoliobackend1.herokuapp.com/api/projects/")
      .then((res) => res.json())
      .then((data) => setrandom(data))
      .catch((err) => console.error("Error: ", err));
  };
  return (
    <div>
      <div>
        <div className="top-bar">
          <h1>My Projects</h1>
          <p>
            <Link to="/">Home</Link> / Projects
          </p>
        </div>

        <div className="main-container portfolio-inner clearfix">
          <div className="portfolio-div">
            <div className="portfolio">
              <div className="categories-grid wow fadeInLeft">
                <nav className="categories text-center">
                  <ul className="portfolio_filter">
                    <li>
                      <a href className="active" data-filter="*">
                        All
                      </a>
                    </li>
                    <li>
                      <a href data-filter=".web">
                        web
                      </a>
                    </li>
                    <li>
                      <a href data-filter=".app">
                        app
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="no-padding portfolio_container clearfix">
                {random.map((post) => (
                  <div className="col-md-4 col-sm-6  fashion app">
                    <a href="single-project.html" className="portfolio_item">
                      <img
                        src={
                          "https://myportfoliobackend1.herokuapp.com/uploads/" +
                          post.image
                        }
                        alt="img"
                        style={{ height: "350px", width: "500px" }}
                        className="img-responsive"
                      />
                      <div className="portfolio_item_hover">
                        <div className="portfolio-border clearfix">
                          <div className="item_info">
                            <span>{post.projectname}</span>
                            <em>{post.description}</em>
                            <em>{post.tools}</em>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
