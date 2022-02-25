import React, { useEffect } from "react";
import "./Category.scss";
import strategy from "../../../../Assets/Images/strategy.png";
import vision from "../../../../Assets/Images/vision.png";
import philosophy from "../../../../Assets/Images/philosophy.png";
import motto from "../../../../Assets/Images/motto.png";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap/all";
import bg from "../../../../Assets/Images/category-bg.jpg";

gsap.registerPlugin(ScrollTrigger);
const Category = () => {
  const data = [
    {
      id: 0,
      name: "Strategy",
      image: strategy,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis dicta officia cumque unde itaque repellendus voluptatem, consectetur veniam vero repudiandae id? Voluptate omnis harum molestiae voluptatibus nisi, at aspernatur.",
    },
    {
      id: 1,
      name: "Vision",
      image: vision,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis dicta officia cumque unde itaque repellendus voluptatem, consectetur veniam vero repudiandae id? Voluptate omnis harum molestiae voluptatibus nisi, at aspernatur.",
    },
    {
      id: 2,
      name: "Philosophy",
      image: philosophy,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis dicta officia cumque unde itaque repellendus voluptatem, consectetur veniam vero repudiandae id? Voluptate omnis harum molestiae voluptatibus nisi, at aspernatur.",
    },
    {
      id: 3,
      name: "Motto",
      image: motto,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae veritatis dicta officia cumque unde itaque repellendus voluptatem, consectetur veniam vero repudiandae id? Voluptate omnis harum molestiae voluptatibus nisi, at aspernatur.",
    },
  ];

  const dataCategory = [];

  for (let i in data) {
    dataCategory.push({
      id: data[i].id,
      title: data[i].name,
      image: data[i].image,
      text: data[i].text,
    });
  }
  const param = useLocation();
  useEffect(() => {
    if (param.hash === "#thirdPage") {
      gsap.fromTo(
        [".category-card-0", ".category-card-2"],
        {
          opacity: 0,
          y: -1000,
        },
        { opacity: 1, y: 0, duration: 1.2, ease: Power1.easeOut }
      );
      gsap.fromTo(
        [".category-card-1", ".category-card-3"],
        {
          opacity: 0,
          y: 1000,
        },
        { opacity: 1, y: 0, duration: 1.2, ease: Power1.easeOut }
      );
    }
  }, [param]);
  return (
    <div className="category" style={{ backgroundImage: `url(${bg})` }}>
      <div className="category-item">
        {dataCategory.map((item) => (
          <div className="category-card" key={item.id}>
            <div className={`category-card-${item.id}`}>
              <p>{item.title}</p>
              <div className="category-image">
                <img src={item.image} alt="" />
              </div>
              <div className="category-content">
                <label>{item.title}</label>
                <div className="category-content-text">{item.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
