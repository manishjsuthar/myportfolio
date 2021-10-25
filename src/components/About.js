import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <div>
        {/* Top bar */}
        <div className="top-bar">
          <h1>About Me</h1>
          <p>
            <Link to="/">Home</Link> / About me
          </p>
        </div>
        {/* end Top bar */}
        {/* Main container */}
        <div className="container main-container clearfix">
          <div className="col-md-4 aboutimgdiv">
            <img src="mypic.jpg" className="img-responsive aboutimg" alt="" />
          </div>
          <div className="col-md-8">
            <h3 className="uppercase">About Me </h3>
            <Link to="/projectadmin">
              <h5>Intro</h5>
            </Link>
            <div className="h-30" />
            <p>
              My name is Manish Suthar. I am currently pursuing Btech degree
              from Swami keshwand institute of Technology and Management (SKIT)
              college, Jaipur. My Hometown is Sirohi. I love to travel mostly on
              bike and explore new place.
            </p>

            <div className="h-10" />
            <ul className="social-ul">
              <li className="box-social">
                <a href="https://www.facebook.com/manish.suthar.127201">
                  <i className="ion-social-facebook" />
                </a>
              </li>
              <li className="box-social">
                <a href="https://www.instagram.com/manish_sthr_/">
                  <i className="ion-social-instagram-outline" />
                </a>
              </li>
              <li className="box-social">
                <a href="https://www.linkedin.com/in/manish-suthar-317108216">
                  <i className="ion-social-linkedin" />
                </a>
              </li>
              <li className="box-social">
                <a href="https://www.github.com/manishjsuthar/">
                  <i className="ion-social-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end Main container */}
      </div>
    </div>
  );
}

export default About;
