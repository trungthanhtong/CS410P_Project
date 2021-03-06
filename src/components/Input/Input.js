import React from "react";


// Custom input that will show error when the input is not valid
export default function Input(props) {

    return (
        <div className={props.inputBox} style={{ marginBottom: "10px" }}>
            <input
                onChange={props.handleChange}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                className="form-control"
            />
            <i className="fa fa-exclamation d-none"></i>
        </div>
    );
}