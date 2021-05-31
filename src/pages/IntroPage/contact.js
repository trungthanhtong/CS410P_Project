import React, {Component}  from "react";
import "./../../App.css";
import title from "./contact.png";



export default class About extends Component{

    clear_form = () => {
        console.log("435345");
      }

    render(){
        
        return (
            
            <div>
                <img
                     className="w-100"
                    src={title}
                     alt="steamstats_contact_title"
                />
                <div class="form-group">
                    <label for="nm" className="lb">Name:</label>
                    <input type="text" class="form-control" id="nm"/>
                </div>
    
                <div class="form-group">
                    <label for="em" className="lb">Email:</label>
                    <input type="text" class="form-control" id="em"/>
                </div>
    
                <div class="form-group">
                    <label for="comment" className="lb">Comment:</label>
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                    <span class="help-block">Tell us about why are you contacting us for..</span>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block bt" onClick={() => this.props.action(3)}>Submit</button>
                <button type="button" class="btn btn-warning btn-lg btn-block bt" onClick={this.clear_form}>Reset</button>
                
            
    
            </div>
        );

    }
}
