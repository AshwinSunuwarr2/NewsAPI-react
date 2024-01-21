import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [darkStyle, setDarkStyle] = useState({
    background: `${props.bgMode}`,
    color: "black",
  });

  const [handleTxt, setHandleTxt] = useState("Enable dark mode");
  const handleDarkMode = () => {
    if (darkStyle.color === "black") {
      setDarkStyle({
        background: "black",
        color: "white",
      });
      setHandleTxt("Enable light mode");
    } else {
      setDarkStyle({
        background: "white",
        color: "black",
      });
      setHandleTxt("Enable dark mode");
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary py-0">
      <div className="container-fluid" style={darkStyle}>
        <Link className="navbar-brand" to="/" style={darkStyle}>
          NewsBud
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={darkStyle}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                style={darkStyle}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/aboutus"
                style={darkStyle}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/business"
                style={darkStyle}
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/entertainment"
                style={darkStyle}
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/general"
                style={darkStyle}
              >
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/health"
                style={darkStyle}
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/science"
                style={darkStyle}
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/sports"
                style={darkStyle}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/technology"
                style={darkStyle}
              >
                Technology
              </Link>
            </li>
          </ul>
          {/* <button>helo</button> */}
        </div>
        <div className="form-check form-switch lg-none">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={handleDarkMode}
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            {handleTxt}
          </label>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
