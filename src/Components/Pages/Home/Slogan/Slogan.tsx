import React from "react";
import "./Slogan.scss";
import console_img_1 from "../../../../Assets/Images/console-img-1.png";
import console_img_4 from "../../../../Assets/Images/console-img-4.png";
import console_img_5 from "../../../../Assets/Images/console-img-5.png";
import console_img_3 from "../../../../Assets/Images/console-img-3.png";
import console_img_2 from "../../../../Assets/Images/console-img-2.png";
import console_img_6 from "../../../../Assets/Images/console-img-6.png";
import Slider from "react-slick";

const Slogan = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dataSlide = [
    {
      id: 1,
      image: console_img_1,
    },
    {
      id: 2,
      image: console_img_4,
    },
    {
      id: 3,
      image: console_img_5,
    },
    {
      id: 4,
      image: console_img_3,
    },
    {
      id: 5,
      image: console_img_2,
    },
    {
      id: 6,
      image: console_img_6,
    },
  ];
  return (
    <div className="slogan">
      <div className="slogan-bg">
        <p>Creative, Fun and- Enjoyable work Impressive</p>
      </div>
      <div className="slogan-content">
        <Slider {...settings} autoplay>
          {dataSlide.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slogan;
