import React, { useState } from "react";
import axios from "axios";
import Myresume from "./resume_ms.pdf";

function Contact() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://myportfoliobackend1.herokuapp.com/api/contactform/new", {
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
      <div>
        <div className="top-bar">
          <h1>contact Me</h1>
          <p>
            <a href="/">Home</a> / Contact Me
          </p>
        </div>
        <div className="container main-container">
          <div className="col-md-6">
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
          <div className="col-md-6 contactcenter">
            <h3 className="text-uppercase">contact me</h3>
            <h5>Feel free to get in touch with me.</h5>
            <div className="h-30" />
            <a href={Myresume} download="resume_ms.pdf">
              <button className="btn btn-box">Resume</button>
            </a>

            <div className="contact-info">
              <p>
                <i className="ion-android-call" /> 8003384840
              </p>
              <p>
                <i className="ion-ios-email" />
                <a href="mailto:sutharm80@gmail.com">sutharm80@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
