import React from "react";
import "./Card.scss";
interface CardProps {
  cover: string;
  title: any;
  tab: string;
  onClick?: any;
}
const Card = ({ title, tab, cover }: CardProps) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div className="box">
        <p className="card-tab">{tab}</p>
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
