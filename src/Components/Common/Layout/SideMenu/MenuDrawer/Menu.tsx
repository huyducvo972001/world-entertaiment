import { Drawer, Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  visible: boolean;
  showDrawer: () => void;
}
const MenuDrawer = ({ visible, showDrawer }: Props) => {
  const path = useLocation();
  const menus = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/videos",
      title: "Videos",
    },
    {
      path: "/teams",
      title: "Teams",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];
  return (
    <>
      <Drawer
        placement="right"
        visible={visible}
        width={532}
        style={{ zIndex: "20" }}
        mask={false}
      >
        <div className="menu">
          <Menu
            style={{
              width: 256,
              backgroundColor: "#000",
              fontSize: 39,
              color: "#fff",
            }}
            mode="inline"
            theme="dark"
            selectable={false}
          >
            {menus.map((item, index) => (
              <Menu.Item
                key={index}
                onClick={() => {
                  showDrawer();
                }}
                style={{ marginBottom: 35 }}
              >
                <Link to={item.path} style={{ color: "#fff" }}>
                  <div
                    className={`menu-item ${
                      item.path === path.pathname ? "active-menu-item" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <div className="menu-line"></div>
        <div className="menu-footer">
          <p>
            202 Phan Chu Trinh, Ward 13, Binh Thanh, Ho Chi Minh.
            <br />
            Tel 08. 765. 4321/ Fax 01. 234. 5678
          </p>
          <p> View Map</p>
          <p>
            Company. <br />
            worldentertaiment@gmail.com
          </p>
          <p>
            Technical support <br />
            worldentertaiment@gmail.com
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
