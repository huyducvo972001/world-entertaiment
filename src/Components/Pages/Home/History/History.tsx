import React, { useEffect, useState } from "react";
import "./History.scss";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faLightbulb,
  faUserFriends,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { Power3, Power4 } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const History = () => {
  const param = useLocation();
  const data = [
    {
      year: <FontAwesomeIcon icon={faLightbulb} />,
      motion: "ABOUT",
      content: [
        {
          id: 0,
          text: "Media Planning",
        },
        {
          id: 1,
          text: "Buying",
        },
        {
          id: 2,
          text: "Campaign Management",
        },
        {
          id: 3,
          text: "Buying",
        },
      ],
    },
    {
      year: <FontAwesomeIcon icon={faVideoCamera} />,
      motion: "ABOUT",
      content: [
        {
          id: 0,
          text: "Master of content creation",
        },
        {
          id: 1,
          text: "Production",
        },
        {
          id: 2,
          text: "Master of content creation",
        },
        {
          id: 3,
          text: "Production",
        },
      ],
    },
    {
      year: <FontAwesomeIcon icon={faEarth} />,
      motion: "ABOUT",
      content: [
        {
          id: 0,
          text: "Digital",
        },
        {
          id: 1,
          text: "Social Marketing Consultancy",
        },
        {
          id: 2,
          text: "Implementation",
        },
        {
          id: 3,
          text: "Digital",
        },
      ],
    },
    {
      year: <FontAwesomeIcon icon={faUserFriends} />,
      motion: "ABOUT",
      content: [
        {
          id: 0,
          text: "Influencer Marketing Consultancy",
        },
        {
          id: 1,
          text: "Management",
        },
        {
          id: 2,
          text: "Influencer Marketing Consultancy",
        },
        {
          id: 3,
          text: "Management",
        },
      ],
    },
  ];
  // eslint-disable-next-line no-restricted-globals
  const [slidesToShow, setSlidesToShow] = useState(4);

  const dataHistory = [];

  for (let i in data) {
    dataHistory.push({
      year: data[i].year,
      content: [
        {
          title: data[i].content[0].text,
          content: data[i].motion,
        },
        {
          title: data[i].content[1].text,
          content: data[i].motion,
        },
        {
          title: data[i].content[2].text,
          content: data[i].motion,
        },
        { title: data[i].content[3].text, content: data[i].motion },
      ],
    });
  }
  const hasWindow = typeof window !== "undefined";
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow]);

  useEffect(() => {
    if (Number(windowDimensions.width) <= 600) {
      setSlidesToShow(1);
    } else if (Number(windowDimensions.width) <= 900) {
      setSlidesToShow(2);
    } else if (Number(windowDimensions.width) <= 1200) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  }, [windowDimensions]);

  const settings = {
    className: "center",
    infinite: false,
    // centerPadding: "60px",
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    afterChange: function (index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  useEffect(() => {
    if (param.hash === "#fourthPage") {
      gsap.fromTo(
        ".history-title",
        {
          y: -500,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 2, ease: Power4.easeOut }
      );
      gsap.fromTo(
        ".history-box-item",
        {
          x: -500,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 2, ease: Power3.easeOut, delay: 1 }
      );
    }
  }, [param]);
  return (
    <div className={`history`}>
      <div className="history-container">
        <div className="history-title">Capabilities</div>
        <div className="history-box-item">
          <Slider {...settings}>
            {dataHistory.map((item: any, index: number) => (
              <div className="history-item" key={index}>
                <div className="history-title-year">{item.year}</div>
                <div className="history-content">
                  {item?.content.map((itemSub: any, indexSub: number) => (
                    <div key={indexSub}>
                      <span className="title">{itemSub.title}</span>
                      <span className="description">{itemSub.content}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default History;
