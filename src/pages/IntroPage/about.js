import React from "react";
import "./../../App.css";
import title from "./about.png";
import { Link } from "react-router-dom";

function About() {
    
    return (
        <div className="text-center">
            <img
                 className="w-100"
                src={title}
                 alt="steamstats_about_title"
            />
            <div className="mobile_view">
            <h4 className="text-white"><b>Purpose:</b> We wish to share information about game in 
            which will help in your decision when planning to find or buy a new game on the Steam gaming
            platform</h4>

            <h5 className="text-white mt-5">We provide a variety of statistical information about game that are on the steam platform
            based on many criteria such as, most played games, most revieved game.</h5>

            <h5 className="text-white mt-5">We acknowledge that review plays a crucial part in deciding whether or not to get 
            a particular game, therefore we also provide information for best and most helpful review.</h5>
            </div>

        </div>
    );
}

export default About;
