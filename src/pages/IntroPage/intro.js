import React, {Component} from "react";
import Nav from "../Nav/Nav";
import "./../../App.css";
import logo from "./intro_logooo.gif";
import title from "./steamtistic.png";
import Intro_title from "./intro_title";
import About from "./about";
import Contact from "./contact";
import { Link } from "react-router-dom";



export default class intro extends Component{

    state = {
        intro: true,
        about: false,
        contact: false,
    }

    constructor(props){
        super(props)

        this.handler = this.handler.bind(this);
  
    }

    handler(arg) {

        

        if(arg === 1){
            this.setState({
                intro: false,
                about: true,
                contact: false,
            });
        }
        else if(arg === 2){
            this.setState({
                intro: false,
                about: false,
                contact: true,
            });  
        }
        else{
            this.setState({
                intro: true,
                about: false,
                contact: false,
            });
        }


    }



    render(){

        

        return (
            <div>
                <Nav action={this.handler}/>
                <div className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                
                                <img onClick={() => this.handler(0)}
                                    className="w-100 mt-5 logo"
                                    src={logo}
                                    alt="steamstats_logo"
                                />
                                
                                
                            </div>
                            
                            <div className="col-sm-6 welcome-container">
                                {this.state.intro === true && <Intro_title />}
                                {this.state.about === true && <About />}
                                {this.state.contact === true && <Contact />}
                                
                                {/* <Intro_title />*/}
                                {/* <contact />*/}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
