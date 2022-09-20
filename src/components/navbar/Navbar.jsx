import React from 'react';
import './Navbar.scss';
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-brand">
                <img
                    src={logo}
                    alt="brand-logo"
                />
                <h3>LeanPitch</h3>
            </div>

            <div className="navbar-button-container">
                <button>Subscribe</button>
                <button className='contact-btn'>Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar;