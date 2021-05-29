import React from "react";
import Nav from "../Nav/Nav";
import "./../../App.css";
import logo from "./intro_logo.gif";
import { Link } from "react-router-dom";

function intro() {
    const navss = {
        color: "white",
        textDecoration: "none",
        fontSize: "large",
        paddingTop: "10px",
    };

    return (
        <div>
            <Nav />
            <div className="gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img
                                className="w-100 mt-5"
                                src={logo}
                                alt="steamstats_logo"
                            />
                        </div>
                        <div className="col-6 welcome-container">
                            <div className="welcome text-center">
                                <h2 className="text-white">Where stats comes to life</h2>
                                <Link to="/steamstat" className="btn btn-success">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default intro;
