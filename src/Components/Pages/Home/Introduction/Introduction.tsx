import React from "react";
import logo from "../../../../Assets/Images/logo-icon.png";
import bg_object_1 from "../../../../Assets/Images/bg-object-1.png";
import bg_object_2 from "../../../../Assets/Images/bg-object-2.png";
import bg_object_3 from "../../../../Assets/Images/bg-object-3.png";
import bg_object_4 from "../../../../Assets/Images/bg-object-4.png";
import bg_object_5 from "../../../../Assets/Images/bg-object-5.png";
import "./Introduction.scss";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();
  const listBg = [
    bg_object_1,
    bg_object_2,
    bg_object_3,
    bg_object_4,
    bg_object_5,
  ];
  return (
    <div className="introduction">
      <div className="introduction-logo">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <span>About The Project</span>
        </div>
      </div>
      <div className="introduction-bg">
        {listBg.map((item, index) => (
          <img
            src={item}
            alt=""
            className={`introduction-bg-${index + 1}`}
            key={index}
          />
        ))}
      </div>
      <div className="introduction-text">
        <p>{t("introduction-text")}</p>
      </div>
      <div className="introduction-footer">
        <p>{t("introduction-footer")}</p>
      </div>
    </div>
  );
};

export default Introduction;
