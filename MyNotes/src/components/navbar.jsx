import "./navbar.css";
import React from "react";
import SignOutIcon from "../assets/SignOutIcon.svg";

const userName = "Anxo Aragundi Mesías";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="ButtonLogo">
                    <b>My Notes</b>
                </button>
                <a href="https://www.anxoaragundi.eu/" target="_blank" rel="noopener noreferrer" className="MadeByAnxo">
                    Made by Anxo Aragundi
                </a>
            </div>
            <div className="navbar-right">
                <span>Hi, {userName}!</span>
                <button>
                    Sign Out
                    <img src={SignOutIcon} alt="icon" className="sign-out-icon" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
