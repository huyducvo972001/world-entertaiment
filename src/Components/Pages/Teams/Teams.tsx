import React, { useEffect } from "react";
import "./Teams.scss";
import bgImage from "../../../Assets/Images/teams-background.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Teams = () => {
  const param = useLocation();
  const listData = [
    {
      id: 0,
      title: "Team 1",
      content: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    },
    {
      id: 1,
      title: "Team 2",
      content: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    },
    {
      id: 2,
      title: "Team 3",
      content: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: 3,
      title: "Team 4",
      content: ["Item 1", "Item 2"],
    },
    {
      id: 4,
      title: "Team 5",
      content: ["Item 1", "Item 2"],
    },
    {
      id: 5,
      title: "Team 6",
      content: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      id: 6,
      title: "Team 7",
      content: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: 7,
      title: "Team 8",
      content: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
  ];

  useEffect(() => {
    if (param.pathname === "/teams") {
      gsap.from(".container", {
        opacity: 0,
        duration: 1,
      });
      gsap.fromTo(
        ".teams-content-label",
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      );
      gsap.fromTo(
        ".teams-content-list-li",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 1,
          stagger: 0.1,
        }
      );
    }
  }, [param]);

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
                <label>{item.title}</label>
              </div>
              <div className="teams-list">
                <ul className="teams-content-list">
                  {item.content.map((i: string, number: number) => (
                    <li key={number} className="teams-content-list-li">
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
