import React from "react";
import Header from "../Header/Header";
import "./Primary.css";

export default function Primary() {
  return (
    <div className="primary-section">
      <Header />
      <div className="request-info">
        <h1>We write code.</h1>
        <button className="request-button">REQUEST INFO</button>
      </div>
    </div>
  );
}
