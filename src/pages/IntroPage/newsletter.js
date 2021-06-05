import React, { Component, useRef, useState } from "react";
import "./../../App.css";
import title from "./newss.png";
import style from "../../css/input.module.css";
import Input from "../../components/Input/Input";
import Swal from 'sweetalert2'

export default function News() {

    const [state, setState] = useState({
        values: {
            email: "",
        },
        errors: {
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
        }
    };

    return (
        <form>
            <img className="w-100" src={title} alt="steamstats_contact_title" />

            <div class="form-group">
                <p className="text-white mt-3">Enter your email, we will send exciting things to you...</p>
                <Input
                    type="email"
                    name="email"
                    inputBox={state.errors.email}
                    handleChange={handleChange}
                />
            </div>

            <button
                type="submit"
                class="btn btn-primary btn-lg btn-block bt2"
                onClick={handleSubmit}
            >
                Subscribe!
            </button>
        </form>
    );
}
