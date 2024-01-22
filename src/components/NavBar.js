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
                className="nav-link"
                aria-current="page"
                to="/"
                style={props.bgMode}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/aboutus"
                style={props.bgMode}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/business"
                style={props.bgMode}
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/entertainment"
                style={props.bgMode}
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/general"
                style={props.bgMode}
              >
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/health"
                style={props.bgMode}
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/science"
                style={props.bgMode}
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/sports"
                style={props.bgMode}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-disabled="true"
                to="/technology"
                style={props.bgMode}
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
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            darkMode
          </label>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
