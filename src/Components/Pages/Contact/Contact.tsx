import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";
const Contact = () => {
  const { t } = useTranslation();
  const contactFooter = [
    {
      title: "Work With Us.",
      content: "loocreative@playlooc.com",
    },
    {
      title: "Careers.",
      content: "loocreative@playlooc.com",
    },
  ];
  return (
    <div className="contact">
      <div className="contact-title">Contact us</div>
      <div className="contact-content">
        <div className="contact-content-map">
          <iframe
            title="looclocation"
            style={{ width: "100%", height: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
          ></iframe>
        </div>
        <div className="contact-content-info">
          <div className="contact-content-info-left">
            <p>{t("contact1")}</p>
            <p>{t("contact2")}</p>
            <p>{t("contact3")}</p>
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
