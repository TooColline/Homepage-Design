import React from "react";
import "./style/Explore.scss";

const Explore = () => {
  return (
    <div id="explore" className="explore">
      <div className="explore-caption">
        <h3 className="heading-3">
          To explore Business Event get ready with more than{" "}
          <span className="h3-span">10000 </span>
          people.
        </h3>
        <p className="explore-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ue velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className="btn btn--orange">
          Explore it Now <i className="border-fa fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <div className="testimonials-container">
        <div className="design-wrapper">
          <div className="lower-div">
            <div className="upper-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
