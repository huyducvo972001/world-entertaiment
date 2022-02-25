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
      path: "/works",
      title: "Works",
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
              backgroundColor: "#061440",
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
            경기도 의왕시 이미로 40 인덕원 IT벨리 A동 411호
            <br />
            Tel 02. 851. 2662/ Fax 02. 851. 2662
          </p>
          <p> View Map</p>
          <p>
            Company. <br />
            support@taejin.co.kr
          </p>
          <p>
            Technical support <br />
            support@taejin.co.kr
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
