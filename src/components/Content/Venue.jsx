import React from "react";
import "./style/Venue.scss";

const Venue = () => {
  return (
    <div className="venue-container">
      <h2 className="venue-container-heading">Europe’s Largest Event Summit</h2>
      <p className="venue-container-text">
        If you are wondering what kind of a place you are going to visit when
        you participate in this exciting conference, move your mouse to the
        point you wish to see. Take a complete tour throughout the conference
        area. See beforehand the place we are going to host you.
      </p>
      <p className="venue-container-text">
        It’s not just Europe’s largest companies that will be at Event Summit,
        but over 7,000 CEOs from companies of all sizes and industries. Where
        will your company be?
      </p>
      <div className="venue-container-button">
        <button className="btn btn--transparent">
          Download Exhibitor Overview
        </button>
      </div>
    </div>
  );
};

export default Venue;
