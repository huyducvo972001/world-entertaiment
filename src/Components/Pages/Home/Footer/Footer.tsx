import React, { useEffect } from "react";
import "./Footer.scss";
import bg from "../../../../Assets/Images/footer-bg.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { Power4 } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const param = useLocation();
  const data = [
    {
      id: 0,
      title: "E-mail",
      text: "worldentertaiment@gmail.com",
    },
    {
      id: 1,
      title: "Address",
      text: "Ho Chi Minh city, VietNam",
    },
    {
      id: 2,
      title: "Learn more.",
      text: "Learn more about us >",
    },
  ];
  const dataFooter = [];

  for (let i of data) {
    dataFooter.push({
      id: i.id,
      title: i.title,
      content: i.text,
    });
  }
  useEffect(() => {
    if (param.hash === "#fifthPage") {
      gsap.fromTo(
        ".footer-title",
        {
          x: 500,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: Power4.easeOut }
      );
      gsap.fromTo(
        ".footer-content",
        {
          y: -300,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1.2,
        }
      );
    }
  }, [param]);
  return (
    <div
      className="footer"
      style={{
        backgroundImage: ` url(${bg})`,
      }}
    >
      <div className="footer-contact">
        {dataFooter.map((item) => (
          <div
            className={`footer-contact-item ${
              item.id === 3 ? "footer-learn-more" : ""
            }`}
            key={item.id}
          >
            <p className="footer-title">{item.title}</p>
            <span className="footer-content">{item.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
