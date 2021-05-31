import React, {Component}  from "react";
import "./../../App.css";
import title from "./contact.png";



export default class About extends Component{

    state = {
        name: "",
        email: "",
        ta: "",
    };

    updateState = (newState) => {
        this.setState(newState);
    }

    clear_form = () => {
        this.setState({
            name:"",
            email: "",
            ta:"",
        });
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
                    <input 
                        type="text" 
                        class="form-control" 
                        id="nm"
                        defaultValue=""
                        value={this.state.name}
                        onChange={(e) => this.updateState({name: e.target.value})}
                    />
                </div>
    
                <div class="form-group">
                    <label for="em" className="lb">Email:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="em"
                        defaultValue=""
                        value={this.state.email}
                        onChange={(e) => this.updateState({email: e.target.value})}
                    />
                </div>
    
                <div class="form-group">
                    <label for="comment" className="lb">Tell us about why are you contacting us for..</label>
                    <textarea 
                        class="form-control" 
                        rows="5" 
                        id="comment"
                        defaultValue=""
                        value={this.state.ta}
                        onChange={(e) => this.updateState({ta: e.target.value})}
                    ></textarea>
                    <span class="help-block text-white">Example: I encountered an error...</span>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block bt" onClick={() => this.props.action(3)}>Submit</button>
                <button type="button" class="btn btn-warning btn-lg btn-block bt" onClick={this.clear_form}>Reset</button>
                
            
    
            </div>
            
        );

    }
}
