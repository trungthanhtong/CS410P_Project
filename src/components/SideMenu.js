import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SideMenu(props) {
    const [state, setState] = useState({
        collapsed: false,
    });

    const onCollapse = collapsed => {
        setState({ collapsed });
      };

    return (
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                }}
                collapsible
                collapsed={state.collapsed}
                onCollapse={onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Most popular game
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Highest value game
                    </Menu.Item>
                    <Menu.Item key="3" icon={<DesktopOutlined />}>
                        Most cheated game
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DesktopOutlined />}>
                        Most trending game on Twitter
                    </Menu.Item>
                    <Menu.Item key="5" icon={<DesktopOutlined />}>
                        Most played game
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        icon={<UserOutlined />}
                        title="Most played game by categories"
                    >
                        <Menu.Item key="6">Action</Menu.Item>
                        <Menu.Item key="7">Adventure</Menu.Item>
                        <Menu.Item key="8">Role-playing</Menu.Item>
                        <Menu.Item key="9">Simulation</Menu.Item>
                        <Menu.Item key="10">Strategy</Menu.Item>
                        <Menu.Item key="11">Sports</Menu.Item>
                        <Menu.Item key="12">Puzzle</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
    );
}
