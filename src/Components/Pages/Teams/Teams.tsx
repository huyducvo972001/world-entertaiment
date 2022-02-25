import React from "react";
import "./Teams.scss";
import bgImage from "../../../Assets/Images/teams-background.jpg";
import { useTranslation } from "react-i18next";

const Teams = () => {
  const { t } = useTranslation();
  const data = t("teams", { returnObjects: true }) as any;

  const listData = [];
  for (let i of data) {
    console.log(i);
    listData.push({
      label: i.title,
      list: i.content,
    });
  }

  return (
    <div className="container">
      <div className="teams" style={{ backgroundImage: ` url(${bgImage})` }}>
        <div className="teams-title">
          <span>TEAMS</span>
        </div>
        <div className="teams-content">
          {listData.map((item, index) => (
            <div key={index} className="teams-content-card">
              <div className="teams-content-label">
                <label>{item.label}</label>
              </div>
              <div className="teams-list">
                <ul className="teams-content-list">
                  {item.list.map((i: string, number: number) => (
                    <li key={number}>
                      <p>{i}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
