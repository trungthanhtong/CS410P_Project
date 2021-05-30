import "./../../App.css";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import SizeContext from "antd/lib/config-provider/SizeContext";
import "../../css/landingPage.css";


export default class Nav extends Component{


    state = {
        about: false,
        contact: false,
    }

    showAbout = () =>{
        this.setState({
            about: true,
            contact: false,
        })
        console.log("about:" + this.state.about);
        console.log("contact:" + this.state.contact);
    }

    showContact = () =>{
        this.setState({
            about: false,
            contact: true,
        })
        console.log("about:" + this.state.about);
        console.log("contact:" + this.state.contact);
    }


    render(){

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
                        <Link style={navss} to="/about" onClick={() => this.props.action(1)}>
                            About SteamStats
                        </Link>
                    </li>
    
                    <li>
                        <Link style={navss} to="/contact" onClick={() => this.props.action(2)}>
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
}
