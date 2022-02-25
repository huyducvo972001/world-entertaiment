import React, { useEffect, useState } from "react";
import MenuDrawer from "./MenuDrawer/Menu";
import "./SideMenu.scss";
import { useLocation } from "react-router-dom";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const param = useLocation();

  const showDrawer = () => {
    setVisible(!visible);
    setIsOpen(!isOpen);
    setChangeColor(!changeColor);
  };

  useEffect(() => {
    if (
      param.pathname === "/contact" ||
      param.hash === "#fourthPage" ||
      param.pathname === "/videos"
    ) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }, [param, isOpen]);

  return (
    <div
      className={`sidemenu ${changeColor ? "sidemenu-change" : ""} ${
        isOpen ? "sidemenu-white-color" : ""
      }`}
    >
      <div
        className={`sidemenu-button ${isOpen ? "sidemenu-active" : ""}`}
        onClick={showDrawer}
      >
        <div className="sidemenu-line-1 sidemenu-line"></div>
        <div className="sidemenu-line-2 sidemenu-line"></div>
      </div>

      <MenuDrawer visible={visible} showDrawer={showDrawer} />
    </div>
  );
};

export default SideMenu;
