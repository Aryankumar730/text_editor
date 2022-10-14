import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // function getId(){
  //   console.log(value);
  // }
  

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.colorText}`} to="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.colorText}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.colorText}`} to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            {/* <button className="btn btn-primary" type="submit">
              Search
            </button> */}
          {/* </form> */}
        </div>
        <div className="form-check form-switch mx-4">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className={`form-check-label text-${props.colorText}`} htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
        </div>
        {/* <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" id="Dark" href="/" >Dark</a></li>
            <li><a className="dropdown-item" id="" href="/">Light</a></li>
            <li><a className="dropdown-item" id="" href="/">Night Blue</a></li>
            <li><a className="dropdown-item" id="" href="/">Dimmed</a></li>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "BuntyText",
  aboutText: "About Us"
}