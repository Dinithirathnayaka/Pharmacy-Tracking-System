// CardSkeleton.js
import React from "react";
import "./CardSkeleton.css";

const CardSkeleton = () => {
  return (
    <div
      className={`card h-100 shadow template_Container card-skeleton-padding`}
    >
      <div className="card-skeleton-back"></div>
      <div className="card-skeleton-picture-container">
        <div className="card-skeleton-picture"></div>
      </div>
      <div className="card-skeleton-contacts">
        <h3 className="text-center">&#8203;</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="card-skeleton-socials text-center">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="card-skeleton-circles-container">
        <div className="card-skeleton-circle"></div>
        <div className="card-skeleton-circle"></div>
        <div className="card-skeleton-circle"></div>
        <div className="card-skeleton-circle"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
