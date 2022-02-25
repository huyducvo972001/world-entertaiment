import React, { useEffect, useState } from "react";
import "./History.scss";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t } = useTranslation();
  const data = t("history", { returnObjects: true }) as any;
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
  return (
    <div className={`history`}>
      <div className="history-container">
        <div className="history-title">History</div>
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
