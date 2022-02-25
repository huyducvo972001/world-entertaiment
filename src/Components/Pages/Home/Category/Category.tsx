import React from "react";
import "./Category.scss";
import on_game_dev_img from "../../../../Assets/Images/on-game-dev-img.png";
import on_ui_design_img from "../../../../Assets/Images/on-ui-design-img.png";
import on_si_img from "../../../../Assets/Images/on-si-img.png";
import on_game_mar_img from "../../../../Assets/Images/on-game-mar-img.png";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t } = useTranslation();
  const data = t("category", { returnObjects: true }) as any;
  const dataImage = [
    on_game_dev_img,
    on_ui_design_img,
    on_si_img,
    on_game_mar_img,
  ];
  const dataCategory = [];

  for (let i in data) {
    dataCategory.push({
      id: data[i].id,
      title: data[i].name,
      image: dataImage[Number(i)],
      text: data[i].text,
    });
  }
  return (
    <div className="category">
      <div className="category-item">
        {dataCategory.map((item) => (
          <div className="category-card" key={item.id}>
            <p>{item.title}</p>
            <div className="category-image">
              <img src={item.image} alt="" />
            </div>
            <div className="category-content">
              <label>{item.title}</label>
              <div className="category-content-text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
