import React from "react";
import "./style/Customer.scss";

const Customer = () => {
  return (
    <div className="customer-container">
      <h2 className="customer-container-heading">Meet Your Next Customer</h2>
      <p className="customer-container-text">
        From coffee bars to VR booths, our partnerships team know how to
        position your product to appeal to our audience. Get our partnership
        deck now.
      </p>
      <div className="customer-container-button">
        <button className="btn btn--transparent">Get partnership deck</button>
      </div>
    </div>
  );
};

export default Customer;
