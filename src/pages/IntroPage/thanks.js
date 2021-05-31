import React from "react";
import "./../../App.css";
import title from "./sent.png";
import { Link } from "react-router-dom";

function Thanks() {
    
    return (
        <div className="text-center">
            <img
                 className="w-100"
                src={title}
                 alt="steamstats_about_title"
            />
            <h5 className="text-white">Thank you for contacting us, our reply will usually come in around 1-2 business day</h5>
            
        

        </div>
    );
}

export default Thanks;
