import React from "react";
import "./../../App.css";
import title from "./contact.png";
import { Link } from "react-router-dom";

function About() {
    
    return (
        <div>
            <img
                 className="w-100"
                src={title}
                 alt="steamstats_contact_title"
            />
            <h3>Very nice and good place to play</h3>
        </div>
    );
}

export default About;
