/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Detail from "./Detail/Detail";
import { worksData } from "./worksData";
import "./Works.scss";
import logo from "./Asset/logo.png";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { CaretDownOutlined } from "@ant-design/icons";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  "ALL",
  "SHOWREEL",
  "COMMERCIAL",
  "MOTION",
  "OPENING TITLE",
  "MV",
  "ARTWORK",
  "DESIGN",
];

const Works = () => {
  const [vimeo, setVimeo] = useState<any>("");
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState<any>("");
  const [tabOfWork, setTabOfWork] = useState("");
  const [works, setWorksData] = useState(worksData);
  const { t } = useTranslation();
  const data = t("works", { returnObjects: true }) as any;

  const param = useLocation().search;
  const path = useLocation().pathname;

  useEffect(() => {
    const card = document.querySelectorAll(".card");
    gsap.set(card, {
      opacity: 0,
      scale: 0.7,
    });

    ScrollTrigger.batch(card, {
      onEnter: (batch) => {
        card.forEach((card, index) => {
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            stagger: 0.6,
            delay: index * 0.2,
          });
        });
      },
    });
  }, []);

  useEffect(() => {
    if (!param) return;
    if (param.split(" ").join("%20") === "?ALL") {
      setWorksData(worksData);
      return;
    } else {
      const newWork = worksData.filter(
        (work) => `?${work.desc.split(" ").join("%20")}` === param
      );
      setWorksData(newWork);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  for (let i in data) {
    const n = Number(i);
    worksData[n].partners = data[n].partners;
  }

  return (
    <div className="works">
      <h4 className="works-title">WORKS</h4>
      <div>
        <div className="works-tabs-select">
          <span className="menu-tabs">
            Select <CaretDownOutlined />
          </span>
          <ul className="works-tabs">
            {tabs.map((tabItem, index) => (
              <li
                key={index}
                className={`works-tabs-item ${
                  param === `?${tabItem.split(" ").join("%20")}` ||
                  (path === "/works" && index === 0 && !param)
                    ? "active"
                    : ""
                }`}
              >
                <Link to={`/works?${tabItem}`}>{tabItem}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="works-list-cards" style={{ paddingTop: "10px" }}>
        {works.map((work, index) => (
          <div
            key={index}
            style={{ width: "100%" }}
            onClick={() => {
              setVisible(true);
              setVimeo(work.video);
              setTitle(work.partners);
              setTabOfWork(work.desc);
            }}
          >
            <Card title={work.partners} tab={work.desc} cover={work.img} />
          </div>
        ))}
      </div>

      <Detail
        visible={visible}
        tab={tabOfWork}
        title={title}
        vimeo={vimeo}
        setVisible={setVisible}
      />
      <div className="box-footer">
        <ul className="footer">
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <a href="">Vimeo</a>
          </li>
          <li>
            <a href="">Youtube</a>
          </li>
          <li>
            <a href="">instagram</a>
          </li>
          <li>
            <a href="">facebook</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works;
