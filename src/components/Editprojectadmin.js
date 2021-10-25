import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Editprojectadmin() {
  // const [random, setrandom] = useState([]);

  const [projectname, setprojectname] = useState("");
  const [description, setdescription] = useState("");
  const [tools, settools] = useState("");
  const [image, setimage] = useState("");

  const [projectsList, setProjectsList] = useState([]);

  const addProject = () => {
    axios
      .post("https://myportfoliobackend1.herokuapp.com/api/projects/new", {
        projectname: projectname,
        description: description,
        tools: tools,
        image: image,
      })
      .then(() => {
        setProjectsList([
          ...projectsList,
          {
            projectname: projectname,
            description: description,
            tools: tools,
            image: image,
          },
        ]);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    axios
      .get("https://myportfoliobackend1.herokuapp.com/api/projects/")
      .then((response) => {
        setProjectsList(response.data);
      });
  };

  // const selectUser = (_id) => {
  //   console.log(_id);
  //   let post = projectsList[_id - 1];
  //   setprojectname(post.projectname);
  //   setdescription(post.description);
  //   settools(post.tools);
  //   setimage(post.image);
  // };

  const updateProjects = (id) => {
    axios
      .put(
        `https://myportfoliobackend1.herokuapp.com/api/projects/update/${id}`,
        {
          _id: id,
          projectname,
          description,
          tools,
          image,
        }
      )
      .then((response) => {
        console.log(projectsList);
        setProjectsList(
          projectsList.map((post) => {
            return post._id === id
              ? {
                  _id: post._id,
                  projectname,
                  description,
                  tools,
                  image,
                }
              : post;
          })
        );
      });
  };

  const deleteProject = (id) => {
    axios
      .delete(
        `https://myportfoliobackend1.herokuapp.com/api/projects/delete/${id}`
      )
      .then((response) => {
        setProjectsList(projectsList.filter((post) => post._id !== id));
      });
  };

  return (
    <div>
      <div className="top-bar">
        <h1>My Projects Admin Panel</h1>
        <p>
          <Link to="/">Home</Link> / Projects
        </p>
      </div>
      <div className="container">
        <div className="row ">
          <button>
            <Link to="/uploadimage">Upload Image</Link>
          </button>
          <div className="col-md-6">
            <div className="main-container portfolio-inner clearfix">
              <div className="portfolio-div">
                <div className="portfolio">
                  <div className="no-padding portfolio_container clearfix">
                    {projectsList.map((post, key) => (
                      <div
                        className="col-md-10 fashion app"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="portfolio_item">
                          <img
                            src={
                              "https://myportfoliobackend1.herokuapp.com/uploads/" +
                              post.image
                            }
                            alt="img"
                            style={{ height: "250px", width: "450px" }}
                            className="img-responsive"
                          />
                          <div className="portfolio_item_hover">
                            <div className="portfolio-border clearfix">
                              <div className="item_info">
                                <span>{post.projectname}</span>
                                <em>{post.description}</em>
                                <em>{post.tools}</em>
                                <button
                                  onClick={() => {
                                    updateProjects(post._id);
                                  }}
                                >
                                  Update
                                </button>
                                <button
                                  onClick={() => {
                                    deleteProject(post._id);
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: "20px" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-contact">
                  <input
                    type="text"
                    onChange={(event) => {
                      setprojectname(event.target.value);
                    }}
                    name="name"
                  />
                  <span>Project name</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-contact">
                  <input
                    type="text"
                    onChange={(event) => {
                      settools(event.target.value);
                    }}
                    name="email"
                  />
                  <span>tools</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-contact">
                  <input
                    type="text"
                    onChange={(event) => {
                      setimage(event.target.value);
                    }}
                    name="phone"
                  />
                  <span>Image </span>
                </div>
              </div>

              <div className="col-md-12">
                <div className="textarea-contact">
                  <textarea
                    onChange={(event) => {
                      setdescription(event.target.value);
                    }}
                    name="message"
                    defaultValue={""}
                  />
                  <span>Description</span>
                </div>
              </div>

              <div className="col-md-12">
                <button onClick={addProject}>Add Projects</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editprojectadmin;
