import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary py-0">
      <div className="container-fluid" style={props.bgMode}>
        <Link className="navbar-brand" to="/" style={props.bgMode}>
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
          style={props.bgMode}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-disabled="true"
                to="/aboutus"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-disabled="true"
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-disabled="true"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-disabled="true"
                to="/general"
              >
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-disabled="true"
                to="/health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-disabled="true"
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-disabled="true"
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.bgMode.background === "black" ? "text-light" : ""
                }`}
                aria-disabled="true"
                to="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>
          {/* <button>helo</button> */}
          <div className="form-check form-switch lg-none" style={props.bgMode}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              darkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
