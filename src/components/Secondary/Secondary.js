import React from "react";
import "./Secondary.css";

export default function Secondary() {
  return (
    <div className="secondary-section">
      <div className="clients-title">
        <h2>Clients and Partners Include</h2>
      </div>
      <div>
        <ul className="example-clients">
          <li>
            <img className="client-icon" src="/symantec.png" alt="" />
          </li>
          <li>
            <img className="client-icon" src="/byu.png" alt="" />
          </li>
          <li>
            <img className="client-icon" src="/siemens.png" alt="" />
          </li>
          <li>
            <img className="client-icon" src="/domo.png" alt="" />
          </li>
          <li>
            <img className="client-icon" src="/franklinCovey.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
