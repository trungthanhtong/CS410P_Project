import React, {Component} from "react";
import "./../../App.css";
import title from "./about.png";
import { Link } from "react-router-dom";



export default class About extends Component{

    render(){
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
                platform.</h4>
    
                <h5 className="text-white mt-5">We provide a range of information about game reviews on the Steam platform
                based on many criteria to provide information about the most played games and most reviewed games.</h5>
    
                <h5 className="text-white mt-5">Game reviews play a crucial part in deciding whether or not to get 
                a particular game. Therefore, we also provide information about reviews. This includes information about
                the funniest and most helpful reviews found on Steam.</h5>
                </div>
    
                <button
                    class="btn btn-primary mt-2"
                    onClick={() => this.props.action(3)}
                >
                    Start Tutorial
                </button>
    
            </div>
        );

    }

}