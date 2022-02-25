import React, { useEffect } from "react";

import Slogan from "./Slogan/Slogan";
import Introduction from "./Introduction/Introduction";
import Category from "./Category/Category";
import History from "./History/History";
import Footer from "./Footer/Footer";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Home.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const param = useLocation();
  const anchors = [
    "#firstPage",
    "#secondPage",
    "#thirdPage",
    "#fourthPage",
    "#fifthPage",
  ];

  const dataHome = [
    {
      hash: "#firstPage",
      className: "introduction",
      element: <Introduction />,
    },
    {
      hash: "#secondPage",
      className: "slogan",
      element: <Slogan />,
    },
    {
      hash: "#thirdPage",
      className: "category",
      element: <Category />,
    },
    {
      hash: "#fourthPage",
      className: "history",
      element: <History />,
    },
    {
      hash: "#fifthPage",
      className: "footer",
      element: <Footer />,
    },
  ];

  const history = useNavigate();

  useEffect(() => {
    if (param.hash === "") {
      history("/#firstPage");
    }
  });

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      scrollingSpeed={700}
      render={() => {
        return (
          <>
            {dataHome.map((item, index) => (
              <div className="section" key={index}>
                <div
                  className={`${
                    param.hash === item.hash
                      ? `${item.className}-animation`
                      : `${item.className}-close`
                  }`}
                >
                  {item.element}
                </div>
              </div>
            ))}
          </>
        );
      }}
    />
  );
};

export default Home;
