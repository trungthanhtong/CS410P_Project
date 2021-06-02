import React, { Component, useRef, useState } from "react";
import "./../../App.css";
import title from "./contact.png";
import style from "../../css/input.module.css";
import Input from "../../components/Input/Input";
import Swal from 'sweetalert2'

export default function ContactForm() {

    const resetBtn = useRef(null);

    const [state, setState] = useState({
        values: {
            name: "",
            email: "",
            message: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let { values, errors } = state;
        for (let key in errors) {
            if (errors[key].trim() !== "") {
                valid = false;
            }
        }
        for (let key in values) {
            if (values[key].trim() === "") {
                valid = false;
                if (key !== "message") {
                    errors[key] = style.inputBox;
                }
            }
        }
        setState({
            ...state,
            values,
            errors,
        });
        if (valid) {
            Swal.fire(
                'Thank you!',
                'Your message has been sent!',
                'success'
              )
              resetBtn.current.click();
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
                    Example: I encountered an error...
                </span>
            </div>
            <button
                type="submit"
                class="btn btn-primary btn-lg btn-block bt"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <button
                ref={resetBtn}
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
