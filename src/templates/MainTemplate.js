import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setStatComponent } from "../redux/actions/StatActions";
import MostPlayedGame from "../components/SteamStats/MostPlayedGame";
import MostReviewedGame from "../components/SteamStats/MostReviewedGame";
import BestReviews from "../components/SteamStats/BestReviews";
import HelpfulReviews from "../components/SteamStats/HelpfulReviews";
import Logo from "./header-logo.png"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// MAIN TEMPLATE FOR THE PROJECT
export default function MainTemplate(props) {
    let { Component, ...restRoute } = props;

    const [state, setState] = useState({
        collapsed: false,
    });

    const onCollapse = (collapsed) => {
        setState({ collapsed });
    };

    const dispatch = useDispatch();

    const handleClick = (Component) => {
        dispatch(setStatComponent(Component));
    };

    return (
        <Route
            {...restRoute}
            render={(propsRoute) => {
                return (
                    <Layout style={{ minHeight: "100vh" }}>
                        <Sider
                            collapsible
                            collapsed={state.collapsed}
                            onCollapse={onCollapse}
                            style={{paddingTop:'60px'}}
                        >
                            <img
                                className="w-100 h-logo"
                                src={Logo}
                                 alt="steamstats_title"
                                />
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                defaultSelectedKeys={["1"]}
                                mode="inline"
                            >
                                <Menu.Item
                                    onClick={() =>
                                        handleClick(<MostPlayedGame />)
                                    }
                                    key="1"
                                    icon={<PieChartOutlined />}
                                >
                                    Most played game
                                </Menu.Item>
                                <Menu.Item
                                    onClick={() =>
                                        handleClick(<MostReviewedGame />)
                                    }
                                    key="2"
                                    icon={<DesktopOutlined />}
                                >
                                    Most reviewed game
                                </Menu.Item>
                                <Menu.Item 
                                    onClick={() =>
                                        handleClick(<BestReviews />)
                                    }
                                    key="3" 
                                    icon={<DesktopOutlined />}
                                >
                                    Funniest Reviews
                                </Menu.Item>
                                <Menu.Item
                                    onClick={() =>
                                        handleClick(<HelpfulReviews />)
                                    }
                                    key="4" 
                                    icon={<DesktopOutlined />}>
                                    Most helpful reviews
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout className="site-layout">
                            <Header
                                className="site-layout-background"
                                style={{
                                    padding: "0 50px",
                                    background: "#001529",
                                }}
                            >
                            </Header>
                            <Content style={{ margin: "0 16px" }}>
                                <Component {...propsRoute} />
                            </Content>
                        </Layout>
                    </Layout>
                );
            }}
        />
    );
}
