import React, {Component} from "react";
import "./../../App.css";
import pic1 from "./tutor-pic/1.jpg"
import pic2 from "./tutor-pic/2.jpg"
import ready from "./tutor-pic/ready.png"
import title from "./about.png";
import { Link } from "react-router-dom";



export default class Tutorial extends Component{

    

    state = {
        db_left: 5,
        db_right: "bar",
        t1: true,
        t2: false,
        t3: false,
        t4: false,
        side: "Most Played Game",
    }
    /*states to check which part of the tutorial is render in the tutorial page */
    /*since there is only one tutorial component, the tutorial will be render part by part */

    constructor(props){
        super(props)

        this.t1 = this.t1.bind(this);
        this.t1p = this.t1p.bind(this);
        this.t2 = this.t2.bind(this);
        this.t2p = this.t2p.bind(this);
        this.t3 = this.t3.bind(this);
        this.db_lefts = this.db_lefts.bind(this);
        this.db_rights = this.db_rights.bind(this);
        this.again = this.again.bind(this);
  
    }

    db_lefts(arg){
        this.setState({
            db_left: arg,
        });
    }
    /*function for the dropbox tutorial for the left dropbox, it changes the state to whatever the selection in the dropbox is chosen */
    /*db = dropbox */


    db_rights(arg){
        this.setState({
            db_right: arg,
        });
    }
    /*function for the dropbox tutorial for the right dropbox, it changes the state to whatever the selection in the dropbox is chosen */
    /*db = dropbox */

    side(arg){
        this.setState({
            side: arg,
        });
    }
    /*function for nav bar tutorial, it changes the state to whichever value of the most recently click navbar */


    /*FROM HERE __________________________ */
    t1(){
        this.setState({
            t1: false,
            t2: true,
        });
    }

    t1p(){
        this.setState({
            t2: false,
            t1: true,
        });
    }

    t2(){
        this.setState({
            t2: false,
            t3: true,
        });
    }

    t2p(){
        this.setState({
            t3: false,
            t2: true,
        });
    }

    t3(){
        this.setState({
            t3: false,
            t4: true,
        });
    }
    /*TO HERE________________________________ */
    /*function to switch state to the next part of the tutorial*/
    /*the "p" is function to go back to the previous states, hence previous part of the tutorial page */



    again(){
        this.setState({
            t4: false,
            t1: true,
        });
    }
    /*function to reset the state to the initial tutorial component state */

    render(){

        
        return (
            <div className="text-center tutor">

                <h1>How to use Steamstistic</h1>

                {this.state.t1 === true && 
                    <div>
                        <img
                        className="w-100 mt-5"
                        src={pic1}
                        alt="tutorial picture 1"
                        />

                        <h3>Here is the page you will see when you click the get started button.</h3>
    
                        <button
                            class="btn btn-primary mt-2"
                            onClick={this.t1}
                        >
                        Next ->
                        </button>
                    </div>
                }

                {this.state.t2 === true && 
                    <div>
                        <img
                        className="w-20 mt-5"
                        src={pic2}
                        alt="tutorial picture 2"
                        />

                        <h4>On the left hand side you will see a side navigation bar like the picture above with different selections you can click on.</h4>
                        <hr></hr>
                        

                        <h5>Try playing with them in the simplified version below.</h5>
                        <ul className="tutor-side-bar-demo" >
                            <li><button 
                                value="Most Played Game" 
                                onClick={(e) => {
                                        this.side(e.target.value);
                                    }}
                                >Most Played Game
                                </button>
                            </li>
                            <li><button 
                                value="Most reviewed game" 
                                onClick={(e) => {
                                        this.side(e.target.value);
                                    }}
                                >Most reviewed game
                                </button>
                            </li>
                            <li><button 
                                value="Funniest reviews" 
                                onClick={(e) => {
                                        this.side(e.target.value);
                                    }}
                                >Funniest reviews
                                </button>
                            </li>
                            <li><button
                                value="Most helpful reviews" 
                                onClick={(e) => {
                                        this.side(e.target.value);
                                    }}
                                >Most helpful reviews
                                </button>
                            </li>
                        </ul>

                        <h5>You can click on them to select which information to display on the application.</h5>
                        <h5>The light blue highlights indicates which information is being displayed right now.</h5>
                        <hr></hr>

                        <h3>NOW SHOWING <span className="tutor-side-value-demo">{this.state.side}</span></h3>
                        
                        
                        <button
                            class="btn btn-warning mt-2"
                            onClick={this.t1p}
                        >
                        &lt;- Prev
                        </button>

                        <button
                            class="btn btn-primary mt-2"
                            onClick={this.t2}
                        >
                        Next ->
                        </button>

                    </div>
                }


                
                {this.state.t3 === true && 
                    <div>
                        
                        <div class="row tutor-db">
                            <div class="col-6">
                                <select 
                                    class="form-select mt-3" 
                                    name="dataLimit"
                                    onChange={(e) => {
                                        this.db_lefts(e.target.value);
                                    }}
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                            </div>
                            
                            <div class="col-6">
                                <select 
                                    class="form-select mt-3" 
                                    name="dataType"
                                    onChange={(e) => {
                                        this.db_rights(e.target.value);
                                    }}
                                >
                                    <option value="Bar">Bar</option>
                                    <option value="Doughnut">Doughnut</option>
                                </select>
                            </div>
                        </div>

                        <h3>Here is the dropbox selector to customize how much data to show and what style of chart to use.</h3>
                        <h5>Feel free to and play with them to see how they work.
                        </h5>

                        <h5>Showing <span className="tutor-db-value-demo">{this.state.db_left}</span> categories</h5>
                        <h5>The chart is <span  className="tutor-db-value-demo">{this.state.db_right}</span> style</h5>

                        <h6>This feature will be located on top of the chart and only for the most played game and most reviewed game section</h6>
    
                        <button
                            class="btn btn-warning mt-2"
                            onClick={this.t2p}
                        >
                        &lt;- Prev
                        </button>

                        <button
                            class="btn btn-primary mt-2"
                            onClick={this.t3}
                        >
                        Next ->
                        </button>
                    </div>
                }

                {this.state.t4 === true && 
                    <div>
                        <img
                        className="w-20 mt-5"
                        src={ready}
                        alt="tutorial picture 1"
                        />
                        <h3>You are ready! </h3>
                        <h3>Press Let's Go to navigate to the main dashboard, or press Restart Tutorial to go through the tutorial again.</h3>
                        <Link to="/steamstat" className="btn btn-success">Let's Go!</Link>
                        <br></br>
                        <button
                            class="btn btn-primary mt-2"
                            onClick={this.again}
                        >
                        Restart Tutorial
                        </button>
                    </div>

                }
                




            </div>
        );

    }
}
