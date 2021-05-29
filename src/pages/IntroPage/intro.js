import React from "react";
import Nav from "../Nav/Nav";
import "./../../App.css";
import logo from "./intro_logo.gif";
import title from "./steamtistic.png";
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
                        <div className="col-sm-6">
                            <img
                                className="w-100 mt-5"
                                src={logo}
                                alt="steamstats_logo"
                            />
                        </div>
                        
                        <div className="col-sm-6 welcome-container">
                            
                            <div className="welcome text-center">
                                <img
                                    className="w-100"
                                    src={title}
                                    alt="steamstats_title"
                                />
                                <h2 className="text-white mt-n">Where stats comes to life</h2>
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
