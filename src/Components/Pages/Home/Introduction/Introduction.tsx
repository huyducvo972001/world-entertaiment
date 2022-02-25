import React, { useEffect, useState } from "react";
import logo from "../../../../Assets/Images/logo-i.png";
import video from "../../../../Assets/Images/bg-intro.mp4";
import "./Introduction.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { Back } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Introduction = () => {
  const [hoursNow, setShoursNow] = useState<any>();
  const param = useLocation();
  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  function startTime() {
    let currentdate = new Date();
    let hours =
      currentdate.getHours() < 10
        ? `0${currentdate.getHours()}`
        : currentdate.getHours();
    let minutes: any = currentdate.getMinutes();
    let seconds: any = currentdate.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    setShoursNow(hours + ":" + minutes + ":" + seconds);
  }

  setInterval(startTime, 1000);

  useEffect(() => {
    if (param.hash === "#firstPage") {
      gsap.fromTo(
        ".introduction-text",
        {
          x: -200,
          opacity: 0,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "none",
        }
      );
      gsap.fromTo(
        [".introduction-time", ".introduction-footer"],
        {
          y: -200,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: Back.easeOut.config(2.5),
          delay: 1,
        }
      );
    }
  }, [param.hash]);
  return (
    <div className="introduction">
      <div className="introduction-bg">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="introduction-text">
        <img src={logo} alt="" />
        <p>world entertainment</p>
      </div>
      <div className="introduction-time">
        <p>Time is our only limitation.</p>
      </div>
      <div className="introduction-footer">
        <p>{hoursNow}</p>
      </div>
    </div>
  );
};

export default Introduction;
