import React, { useEffect } from "react";
import "./Contact.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const param = useLocation();
  const contactFooter = [
    {
      title: "Work With Us.",
      content: "worldentertaiment@gmail.com",
    },
    {
      title: "Careers.",
      content: "worldentertaiment@gmail.com",
    },
  ];
  useEffect(() => {
    if (param.pathname === "/contact") {
      gsap.fromTo(
        ".contact-content-item",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          delay: 1.2,
        }
      );
      gsap.fromTo(
        ".contact-title",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
        }
      );
    }
  }, [param]);
  return (
    <div className="contact">
      <div className="contact-title">Contact us</div>
      <div className="contact-content">
        <div className="contact-content-map contact-content-item">
          <iframe
            title="looclocation"
            style={{ width: "100%", height: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1645855275525!5m2!1svi!2s"
          ></iframe>
        </div>
        <div className="contact-content-info  contact-content-item">
          <div className="contact-content-info-left">
            <p>Ho Chi Minh city, VietNam</p>
            <p>Binh Thanh district</p>
            <p>08 080 0808</p>
          </div>
          <div className="contact-content-info-right">
            {contactFooter.map((item, index) => (
              <div className="contact-content-info-right-group" key={index}>
                <label htmlFor="">{item.title}</label>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
