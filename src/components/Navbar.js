import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark bg-body-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">news24</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item active"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item active"><Link className="nav-link active" to="/business">Business</Link></li>
              <li className="nav-item active"><Link className="nav-link active" to="/general">General</Link></li>
              <li className="nav-item active"><Link className="nav-link active" to="/health">Health</Link></li>
              <li className="nav-item active"><Link className="nav-link active" to="/science">Science</Link></li>
              <li className="nav-item active"><Link className="nav-link active" to="/sports">Sports</Link></li>
              <li className="nav-item active"><Link className="nav-link active" to="/technology">Technology</Link></li>

              {/* <li className="nav-item dropdown">
          <a className="nav-a active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
         </li>  */}
            </ul>

            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    )
  };

}

