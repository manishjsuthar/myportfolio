import React, { useState } from "react";
import axios from "axios";

function UpdateProject() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/contactform/new", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      })
      .then((res) => {
        console.log(res.data);
        alert("message has been sent successfully");
      });
  };

  const handleOnChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setdata(newData);
    console.log(newData);
  };

  return (
    <div>
      <div className="top-bar">
        <h1>contact Me</h1>
        <p>
          <a href="/">Home</a> / Contact Me
        </p>
      </div>
      <div className="container main-container">
        <div className="col-md-12">
          <form onSubmit={(e) => submit(e)}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-contact">
                  <input
                    type="text"
                    onChange={(e) => handleOnChange(e)}
                    id="name"
                    value={data.name}
                    name="name"
                  />
                  <span>your name</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-contact">
                  <input
                    type="text"
                    onChange={(e) => handleOnChange(e)}
                    id="email"
                    value={data.email}
                    name="email"
                  />
                  <span>your email</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-contact">
                  <input
                    type="text"
                    onChange={(e) => handleOnChange(e)}
                    id="phone"
                    value={data.phone}
                    name="phone"
                  />
                  <span>Phone no.</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="textarea-contact">
                  <textarea
                    onChange={(e) => handleOnChange(e)}
                    id="message"
                    value={data.message}
                    name="message"
                    defaultValue={""}
                  />
                  <span>message</span>
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-box">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProject;
