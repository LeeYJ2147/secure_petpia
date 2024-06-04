import React from "react";
import "./Latest.css";

function Latest() {
  return (
    <div className="latest container">
      <h1 className="title">Latest</h1>
      <div className="latest-grid">
        <div className="latest-item">
          Item Name
          <br />
          ₩9,900
        </div>
        <div className="latest-item">
          Item Name
          <br />
          ₩9,900
        </div>
        <div className="latest-item">
          Item Name
          <br />
          ₩9,900
        </div>
        <div className="latest-item">
          Item Name
          <br />
          ₩9,900
        </div>
        {/* Add more latest items as needed */}
      </div>
    </div>
  );
}

export default Latest;
