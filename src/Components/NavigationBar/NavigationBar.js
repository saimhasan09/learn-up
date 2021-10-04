import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo1.png";
import './NavigationBar.css';


const NavigationBar = () => {
    return (
        <div className="header">
            <div >
                <img src={logo} alt="" />
            </div>

            <div>
                <nav>
                    <NavLink className="header-text" to="/home">Home</NavLink>
                    <NavLink className="header-text" to="/aboutUs">About us</NavLink>
                    <NavLink className="header-text" to="/services">Services</NavLink>
                    <NavLink className="header-text" to="/contact">Contact</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default NavigationBar;