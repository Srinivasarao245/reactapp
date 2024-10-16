import React from "react"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="bg-info">
            <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">Edupoly</span>
      </a>
      <ul className="nav nav-pills ">
        <li className="nav-item btn btn-hover-secondary"><Link to="/home" className="nav-link text-danger-emphasis" aria-current="page">Home</Link></li> &nbsp;&nbsp;
        <li className="nav-item btn btn-hover-secondary"><Link to="/feature" className="nav-link text-danger-emphasis">Features</Link></li> &nbsp;&nbsp;
        <li className="nav-item btn btn-hover-secondary"><Link to="/price" className="nav-link text-danger-emphasis">Price</Link></li> &nbsp;&nbsp;
        <li className="nav-item btn btn-hover-secondary"><Link to="/faqs" className="nav-link text-danger-emphasis">FAQs</Link></li> &nbsp;&nbsp;
        <li className="nav-item btn btn-hover-secondary"><Link to="/aboutus" className="nav-link text-danger-emphasis">About</Link></li> &nbsp;&nbsp;
        <li className="nav-item btn btn-hover-secondary"><Link to="/countries" className="nav-link text-danger-emphasis">Countries</Link></li>
        <li className="nav-item btn btn-hover-secondary"><Link to="/studentdetails" className="nav-link text-danger-emphasis">Student</Link></li> &nbsp;&nbsp;
        <li className="nav-item btn btn-hover-secondary"><Link to="/employeedetails" className="nav-link text-danger-emphasis">Employee</Link></li> &nbsp;&nbsp;
      </ul>
    </header>
  </div>
        </div>
    )  }
    export default Header;