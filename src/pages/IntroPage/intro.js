import React, {Component} from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./../../App.css";
import logo from "./intro_logooo.gif";
import title from "./steamtistic.png";
import Intro_title from "./intro_title";
import About from "./about";
import Contact from "./contact";
import Tutorial from "./tutorial"
import { Link } from "react-router-dom";



export default class intro extends Component{

    state = {
        intro: true,
        about: false,
        contact: false,
        form_s: false,
        tutor: false,
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
                tutor: false,
            });
        }
        else if(arg === 2){
            this.setState({
                intro: false,
                about: false,
                contact: true,
                tutor: false,
            });  
        }
        else if(arg === 3){
            this.setState({
                intro: false,
                about: false,
                contact: false,
                tutor: true,
            });  
        }
        else{
            this.setState({
                intro: true,
                about: false,
                contact: false,
                tutor: false,
            });
        }


    }



    render(){

        

        return (
            <div>
                <Nav action={this.handler}/>
                <div className="gradient" action={this.handler}>
                    <div className="container" action={this.handler}>
                        
                        {this.state.tutor === false &&
                        <div className="row" action={this.handler}>
                            
                              
                            <div className="col-sm-6 d-none d-sm-block">
                                
                                <img onClick={() => this.handler(0)}
                                    className="w-100 mt-5 logo"
                                    src={logo}
                                    alt="steamstats_logo"
                                />
                                
                                
                            </div>
                            
                            
                            <div className="col-sm-6 welcome-container" action={this.handler}>
                                {this.state.intro === true && <Intro_title />}
                                {this.state.about === true && <About action={this.handler}/>}
                                {this.state.contact === true && <Contact/>}
                                
                                
                        
                            </div>
                        </div>
                        }

                        {this.state.tutor === true && <Tutorial/>}

                    </div>
                </div>
                <Footer  action={this.handler}/>
            </div>
        );

    }
}
