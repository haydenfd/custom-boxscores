import React from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to='/' className="nav-link">
            <h1>
                Today's games
            </h1>
            </NavLink>
            <NavLink to='/preferences' className="nav-link">
            <h1>
                Preferences
            </h1>
            </NavLink>
            <NavLink to='/sign-in' className="nav-link">
            <h1>
                Account
            </h1>
            </NavLink>
            <NavLink to='/about' className="nav-link">
            <h1>
                About
            </h1>
            </NavLink>                
        </nav>
    )
}

export default Nav