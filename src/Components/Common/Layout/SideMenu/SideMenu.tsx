import React, { useEffect, useState } from "react";
import MenuDrawer from "./MenuDrawer/Menu";
import "./SideMenu.scss";
import { useLocation } from "react-router-dom";
import i18n from "i18next";
const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const [visible, setVisible] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const param = useLocation();
  const changeLanguage = (value: any) => {
    value === "en" ? setLanguage(true) : setLanguage(false);
    i18n.changeLanguage(value);
  };

  const showDrawer = () => {
    setVisible(!visible);
    setIsOpen(!isOpen);
    setChangeColor(!changeColor);
  };

  useEffect(() => {
    if (
      param.pathname === "/contact" ||
      param.hash === "#fourthPage" ||
      param.pathname === "/works"
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

      <div className={`language`}>
        <span
          className={language ? "active" : ""}
          onClick={() => changeLanguage("en")}
        >
          EN
        </span>
        <span
          className={language ? "" : "active"}
          onClick={() => changeLanguage("kr")}
        >
          KR
        </span>
      </div>
      <MenuDrawer visible={visible} showDrawer={showDrawer} />
    </div>
  );
};

export default SideMenu;
