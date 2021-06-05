import "./../../App.css";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import SizeContext from "antd/lib/config-provider/SizeContext";
import "../../css/landingPage.css";


export default class Footer extends Component{

    render(){
  
        return (
            <footer>
                <p>copyright Thanh, Maeve, Jonathan</p>
                <p>2021 Front-end dashboard project</p>
            </footer>
        );

    }
}
