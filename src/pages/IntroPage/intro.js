import React, {Component} from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./../../App.css";
import logo from "./intro_logooo.gif";
import title from "./steamtistic.png";
import Intro_title from "./intro_title";
import About from "./about";
import Contact from "./contact";
import Tutorial from "./tutorial";
import News from "./newsletter";
import { Link } from "react-router-dom";



export default class intro extends Component{

    state = {
        intro: true,
        about: false,
        contact: false,
        form_s: false,
        tutor: false,
        news: false,
    }
    /*This state decides which component is loaded to the screen in the landing page*/

    constructor(props){
        super(props)

        this.handler = this.handler.bind(this);
  
    }
    /*Contructor and binding a function so I can pass it to the child */

    handler(arg) {

        

        if(arg === 1){
            this.setState({
                intro: false,
                about: true,
                contact: false,
                tutor: false,
                news: false,
            });
        }
        else if(arg === 2){
            this.setState({
                intro: false,
                about: false,
                contact: true,
                tutor: false,
                news: false,
            });  
        }
        else if(arg === 3){
            this.setState({
                intro: false,
                about: false,
                contact: false,
                tutor: true,
                news: false,
            });  
        }
        else if(arg === 4){
            this.setState({
                intro: false,
                about: false,
                contact: false,
                tutor: false,
                news: true,
            });  
        }
        else{
            this.setState({
                intro: true,
                about: false,
                contact: false,
                tutor: false,
                news: false,
            });
        }


    }
    /*this function alone decide which component to be displayed, the navbar will control the majority of the function and some other childs */


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
                                {this.state.news === true && <News/>}
                                {/*this part check which state is true and renders that */}
                                
                                
                        
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
/*this.handler is to pass the handler function to the child so that they could use it */
