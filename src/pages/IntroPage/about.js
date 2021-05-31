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
            <h4 className="text-white mt-n"><b>Purpose:</b> We wish to share information about game in 
            which will help in your decision when planning to find or buy a new game on the Steam gaming
            platform</h4>
        </div>
    );
}

export default About;
