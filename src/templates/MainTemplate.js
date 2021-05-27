import React from "react";
import { Route } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import { Layout } from "antd";

const { Header, Content } = Layout;


// MAIN TEMPLATE FOR THE PROJECT
export default function MainTemplate(props) {
    let { Component, ...restRoute } = props;

    return (
        <Route
            {...restRoute}
            render={(propsRoute) => {
                return (
                    <Layout>
                        <SideMenu/>
                        <Layout
                            className="site-layout"
                            style={{ marginLeft: 200 }}
                        >
                            <Header
                                className="site-layout-background"
                                style={
                                    { 
                                      padding: '0 50px',
                                      background: "#001529"
                                    }
                                }
                            ></Header>
                            <Content
                                style={{
                                    margin: "24px 16px 0",
                                    overflow: "initial",
                                }}
                            >
                                <div
                                    className="site-layout-background"
                                    style={{ padding: 24 }}
                                >
                                  <Component {...propsRoute}/>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                );
            }}
        />
    );
}
