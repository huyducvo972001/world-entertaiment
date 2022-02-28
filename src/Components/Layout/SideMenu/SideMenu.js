import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import "./SideMenu.scss";

import {
  AppstoreOutlined,
  AreaChartOutlined,
  ContainerOutlined,
  DashboardOutlined,
  InboxOutlined,
  LayoutOutlined,
  PicCenterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../Asserts/images/logo.png";

const { SubMenu } = Menu;

const SideMenu = () => {
  const [isLoading, setIsLoading] = useState(true);
  const partName = useLocation();

  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState("dashboard");
  useEffect(() => {
    const s = partName.pathname.split("/");
    setDefaultSelectedKeys(s[s.length - 1]);
  }, [partName]);

  setTimeout(() => {
    setIsLoading(false);
  }, 100);

  return (
    <div className="sidemenu">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <br />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="sidemenu_menu">
          <Menu
            theme="dark"
            style={{ backgroundColor: "rgb(44, 53, 83)" }}
            defaultSelectedKeys={[defaultSelectedKeys]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key={"dashboard"}>
              <Link to="/dashboard">
                <DashboardOutlined style={{ fontSize: "16px" }} /> Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key={"event-management"}>
              <Link to="/event-management">
                <PicCenterOutlined style={{ fontSize: "16px" }} /> Sự kiện
              </Link>
            </Menu.Item>
            <Menu.Divider className="menu-divider" key={9}></Menu.Divider>
            <Menu.Item key={"product-management"}>
              <Link to="/product-management">
                <InboxOutlined style={{ fontSize: "16px" }} /> Sản phẩm
              </Link>
            </Menu.Item>
            <Menu.Item key={"brand-management"}>
              <Link to="/brand-management">
                <LayoutOutlined style={{ fontSize: "16px" }} /> Hãng sản xuất
              </Link>
            </Menu.Item>

            <Menu.Item key={"category-management"}>
              <Link to="/category-management">
                <AppstoreOutlined style={{ fontSize: "16px" }} /> Danh mục
              </Link>
            </Menu.Item>

            <Menu.Divider className="menu-divider" key={10}></Menu.Divider>
            <Menu.Item key={"order-management"}>
              <Link to="/order-management">
                <ContainerOutlined style={{ fontSize: "16px" }} /> Đơn hàng
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<AreaChartOutlined style={{ fontSize: "16px" }} />}
              title="Thống kê"
              className="submenu"
            >
              <Menu.Item key={"rate"}>
                <Link to="/statistical-management/rate">Đánh giá</Link>
              </Menu.Item>
              <Menu.Item key={"product"}>
                <Link to="/statistical-management/product">Sản phẩm</Link>
              </Menu.Item>
              <Menu.Item key={"turnover"}>
                <Link to="/statistical-management/turnover">Doanh thu</Link>
              </Menu.Item>
              <Menu.Item key={"customer"}>
                <Link to="/statistical-management/customer">Khách hàng</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Divider className="menu-divider" key={11}></Menu.Divider>
            <Menu.Item key={"user-management"}>
              <Link to="/user-management">
                <UserOutlined style={{ fontSize: "16px" }} /> Tài khoản
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
