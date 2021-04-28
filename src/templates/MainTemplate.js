import React from "react";
import { Route } from "react-router-dom";
import SideMenu from "../components/SideMenu";


export default function MainTemplate(props) {
    let { Component, ...restRoute } = props;

    return (
        <Route
            {...restRoute}
            render={(propsRoute) => {
                return (
                    <div>
                       <SideMenu/>
                    </div>
                );
            }}
        />
    );
}
