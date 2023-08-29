import React from 'react';
import navlogo from '../assets/navlogo.png';
import { FaAngleDown} from "react-icons/fa";
function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <div>
<div className="navbar-logo">
  <img src={navlogo} alt="logo here" />
</div>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home<FaAngleDown />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages<FaAngleDown />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blogs<FaAngleDown />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
      <div className="navbar-log-in">
        <a href="#login" className="login">Log In/Register</a>
        <div></div>
        <a href="" className="login">Book A Table</a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar