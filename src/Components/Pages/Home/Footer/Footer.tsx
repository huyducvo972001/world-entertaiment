import React from "react";
import "./Footer.scss";
import bg from "../../../../Assets/Images/05-bg.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const data = t("footer", { returnObjects: true }) as any;
  const dataFooter = [];

  for (let i of data) {
    dataFooter.push({
      id: i.id,
      title: i.title,
      content: i.text,
    });
  }
  return (
    <div className="footer" style={{ backgroundImage: ` url(${bg})` }}>
      <div className="footer-contact">
        {dataFooter.map((item) => (
          <div
            className={`footer-contact-item ${
              item.id === 3 ? "footer-learn-more" : ""
            }`}
            key={item.id}
          >
            <p>{item.title}</p>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
      <div className="footer-content">
        <p>Let's</p>
        <p>Make the world</p>
        <p>Together.</p>
      </div>
    </div>
  );
};

export default Footer;
