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
                    <div className="col-sm-3">
                    <button
                            class="btn btn-primary mt-2 footer-bt"
                            onClick={() => this.props.action(3)}
                        >
                        Start Tutorial
                        </button>
                    </div>
                    <div className="col-sm-6">
                        <p>Copyright Thanh, Maeve, Jonathan</p>
                        <p>2021 Front-End Dashboard Project</p>
                    </div>
                    <div className="col-sm-3">
                        <p>Email: steamstistic@stt.com</p>
                        <p>Phone: (123)456-7890</p>
                    </div>
                </div>
                

            </footer>
        );

    }
}
