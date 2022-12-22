import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-custom-2">
      
  <div className="container-fluid">
    <a className="navbar-brand" href="/Rokto"><i class="fa-solid fa-droplet"></i>{props.a1}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item px-2">
          <a className="nav-link active" aria-current="page" href="/Rokto"><i class="fa-solid fa-house-user"></i>{props.a1}</a>
        </li> */}
        <li className="nav-item px-2">
          <a className="nav-link" aria-current="page" href="/Rokto"><i class="fa-solid fa-people-group"></i>{props.a2}</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link active" aria-current="page" href="/Rokto"><i class="fa-solid fa-magnifying-glass"></i>{props.a4}</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link active" aria-current="page" href="/Rokto"><i class="fa-solid fa-hand-holding-medical"></i>{props.a5}</a>
        </li>
        <li className="nav-item dropdown px-2">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-circle-chevron-down"></i>
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Rokto">Live Feed</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/Rokto">About Us</a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav ml-6 mb-2 mb-lg-0">
        <li className="nav-item px-2">
          <a className="nav-link" href="/Login"><i class="fa-solid fa-right-to-bracket"></i>{props.a3}</a>
        </li>
        {/* <li className="nav-item dropdown px-3">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user-plus"></i>
            Sign Up
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Sign Up As Donor</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Sign Up As Receiver</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/Signup"><i class="fa-solid fa-right-to-bracket"></i>{props.a6}</a>
        </li>
      </ul>
    </div>
  </div>
  
</nav>

)
}
Navbar.propTypes = {
                    // a1: PropTypes.string,
                    a2: PropTypes.string,
                    a3: PropTypes.string,
                    a4: PropTypes.string,
                    a5: PropTypes.string}
Navbar.defaultProps = {
  a1: 'Set the title here'
}