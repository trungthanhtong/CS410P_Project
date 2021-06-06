import "./../../App.css";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import SizeContext from "antd/lib/config-provider/SizeContext";
import "../../css/landingPage.css";


export default class Footer extends Component{

    render(){
  
        return (
            <footer>
                <div className="row">
                    <div className="col-sm-1">
                        <button
                            class="btn btn-primary mt-2 footer-bt"
                            onClick={() => this.props.action(3)}
                        >
                        Start Tutorial
                        </button>
                    </div>
                    <div className="col-sm-1">
                        <button
                            class="btn btn-outline-success mt-2 footer-bt2"
                            onClick={() => this.props.action(4)} 
                            {/* render tutorial page upon click */}
                        >
                        Subscribe to us
                        </button>
                    </div>
                    <div className="col-sm-8">
                        <p>Copyright Thanh, Maeve, Jonathan</p>
                        <p>2021 Front-End Dashboard Project</p>
                    </div>
                    <div className="col-sm-2">
                        <p>Email: steamstistic@stt.com</p>
                        <p>Phone: (123)456-7890</p>
                    </div>
                </div>
                

            </footer>
        );

    }
}
