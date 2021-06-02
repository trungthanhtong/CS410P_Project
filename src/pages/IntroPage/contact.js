import React, { Component, useState } from "react";
import "./../../App.css";
import title from "./contact.png";
import style from "../../css/input.module.css";
import Input from "../../components/Input/Input";
import { render } from "@testing-library/react";

export default function ContactForm(arg) {

    

     
  
    

    const [state, setState] = useState({
        values: {
            name: "",
            email: "",
            message: "",
            help:"Example: I encountered an error...",
        },
        errors: {
            name: "",
            email: "",
        },
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        let newValues = { ...state.values, [name]: value };
        let newErrors = { ...state.errors };
        if (value.trim() === "") {
            newErrors[name] = style.inputBox;
        } else {
            newErrors[name] = "";
        }
        if (name === "email") {
            const re =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            re.test(value.toLowerCase())
                ? (newErrors[name] = "")
                : (newErrors[name] = style.inputBox);
        }
        setState({
            ...state,
            values: { ...newValues },
            errors: { ...newErrors },
        });
    };

    const handleSubmit = () => {
        if (state.values.name === "" || state.values.email === "" || state.errors.name != "" || state.errors.email != "")
        {
            setState({
                ...state,
                values: {help: "Make sure the name and emails are filled correctly.."},
                errors: {name: "",}
            });
        }
        else{
            arg.action(3)
        }
        
    
    };

    return (
        <form>
            <img className="w-100" src={title} alt="steamstats_contact_title" />
            <div class="form-group">
                <p className="text-white">Name</p>
                <Input
                    type="text"
                    name="name"
                    inputBox={state.errors.name}
                    handleChange={handleChange}
                />
            </div>

            <div class="form-group">
                <p className="text-white mt-3">Email</p>
                <Input
                    type="email"
                    name="email"
                    inputBox={state.errors.email}
                    handleChange={handleChange}
                />
            </div>

            <div class="form-group">
                <p className="text-white mt-3">Tell us about why are you contacting us for..</p>
                <textarea
                    class="form-control"
                    rows="5"
                    value={state.values.message}
                    onChange={(e) => {
                        const newValues = {...state.values, message: e.target.value};
                        setState({...state, values: newValues})
                    }}
                ></textarea>
                <span class="help-block text-white">
                    {state.values.help}
                </span>
            </div>
            <button
                type="button"
                class="btn btn-primary btn-lg btn-block bt"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <button
                type="button"
                class="btn btn-warning btn-lg btn-block bt"
                type="reset"
                onClick={() => {
                    const newValues = {...state.values, message: ''};
                        setState({...state, values: newValues})
                }}
            >
                Reset
            </button>
        </form>
    );
}
