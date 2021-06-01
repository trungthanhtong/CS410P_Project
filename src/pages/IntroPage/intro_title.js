import React from "react";
import "./../../App.css";
import title from "./steamtistic.png";
import { Link } from "react-router-dom";

function Intro_title() {
    
    return (
        <div className="welcome text-center">
            <img
                 className="w-100 logoo"
                src={title}
                 alt="steamstats_title"
            />
            
            <h2 className="text-white mt-n">Where statistics come to life</h2>
            <Link to="/steamstat" className="btn btn-success">Get Started</Link>
        </div>
    );
}

export default Intro_title;
