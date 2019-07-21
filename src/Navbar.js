import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/Logo/badHombresLogo.jpg';
import facebook from "./images/Logo/facebook_icon.png";
import instagram from "./images/Logo/instagram_icon.png";

function Navbar(){
  return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-black">
        <Link className="navbar-brand" to="/"><img src={logo} height="40" alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" data-target="#navbarNavAltMarkup" data-toggle="collapse">
            <Link className="nav-item nav-link" to="/shows">Shows</Link>
            <Link className="nav-item nav-link" to="/photos">Photos</Link>
            <Link className="nav-item nav-link" to="/videos">Videos</Link>
            <Link className="nav-item nav-link" to="/contact">Contact</Link>
            {/* <Link exact className="nav-item nav-link" to="/aboutus">About Us</Link> */}
          </div>
        </div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">         
          <p className="followText">
            Follow us on:
          </p>
          <a className="nav-item nav-link" href="https://www.facebook.com/somebadhombres" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="facebook" alt="facebookicon"></img>
          </a>
          <a className="nav-item nav-link" href="https://www.instagram.com/badhombresband" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="instagram" alt="instagramicon"></img>
          </a>
        </div>
      </div>
    </nav>
  );  
}

export default Navbar;