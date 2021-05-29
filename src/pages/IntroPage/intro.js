import React from "react";
import Nav from "../Nav/Nav";
import "./../../App.css";
import logo from "./intro_logo.gif";
import title from "./steamtistic.png";
import Intro_title from "./intro_title";
import About from "./about";
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
                            <Intro_title />
                            {/* <Intro_title />*/}
                            {/* <contact />*/}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default intro;
