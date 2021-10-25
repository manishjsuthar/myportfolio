import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="container-fluid">
        {/* box-header */}
        <header className="box-header">
          <div className="box-logo">
            <Link to="/">
              <img src="img/logo.png" width={80} alt="Logo" />
            </Link>
          </div>
          {/* box-nav */}
          <a className="box-primary-nav-trigger" href="#0">
            <span className="box-menu-text">Menu</span>
            <span className="box-menu-icon" />
          </a>
        </header>
        {/* end box-header */}
        {/* nav */}
        <nav>
          <ul className="box-primary-nav">
            <li className="box-label">About me</li>
            <li>
              <Link to="/">Intro</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
              <i className="ion-ios-circle-filled color" />
            </li>
            <li>
              <Link to="/services">services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">contact me</Link>
            </li>
            <li className="box-label">Follow me</li>
            <li className="box-social">
              <a href="#0">
                <i className="ion-social-facebook" />
              </a>
            </li>
            <li className="box-social">
              <a href="#0">
                <i className="ion-social-instagram-outline" />
              </a>
            </li>
            <li className="box-social">
              <a href="#0">
                <i className="ion-social-twitter" />
              </a>
            </li>
            <li className="box-social">
              <a href="#0">
                <i className="ion-social-dribbble" />
              </a>
            </li>
          </ul>
        </nav>
        {/* end nav */}
      </div>
    </div>
  );
}

export default Navbar;
