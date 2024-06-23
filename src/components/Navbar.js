import React from 'react'
import {
    Link, useLocation,
  } from "react-router-dom";

const Navbar = () => {

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    window.location.reload();
  }
  let location = useLocation();


  return (
    <>
    <nav className="navbar nav-underline navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
 <img src="images/notebook_logo.png" alt="NoteBook logo" width="60" height="40"/>
</Link>         
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-3">
          <Link className={`nav-link ${location.pathname==="/" ? "active": ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className={`nav-link ${location.pathname==="/about" ? "active": ""}`} to="/about">About</Link>
        </li>
      </ul>
    </div>
    {!localStorage.getItem('token')?<form className="d=flex">
    <Link className={`btn btn-outline-primary mx-3 ${location.pathname==="/login" ? "active": ""}`} to="/login"role="button">Login</Link>
    <Link className={`btn btn-outline-primary mx-2 ${location.pathname==="/signup" ? "active": ""}`} to="/signup" role="button">Signup</Link>
    </form>: <button onClick={handleLogout} className="btn btn-outline-primary">Logout</button>}
  </div>
</nav>
</>
)
}

export default Navbar
