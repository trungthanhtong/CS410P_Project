import "./../../App.css";
import React from "react";
import { Link } from "react-router-dom";
import SizeContext from "antd/lib/config-provider/SizeContext";
import "../../css/landingPage.css";

function Nav() {
    const navss = {
        color: "white",
        textDecoration: "none",
        fontSize: "large",
        paddingTop: "10px",
    };

    return (
        <nav>
            <ul className="navs">
                <li>
                    <Link style={navss} to="/about">
                        About SteamStats
                    </Link>
                </li>

                <li>
                    <Link style={navss} to="/contact">
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link
                        className="btn btn-success"
                        style={navss}
                        to="/steamstat"
                    >
                        Get Started
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
