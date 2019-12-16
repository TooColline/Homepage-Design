import React from "react";
import "./style/Brand.scss";

const Brand = () => {
  return (
    <div className="brand-container">
      <div className="text-container">
        <div className="brand-text">
          <div className="text-row-1">Kenya's Largest Event Summit</div>
          <div className="text-row-2">2019</div>
          <div className="text-row-3">ASEEES EVENT</div>
          <div className="text-row-4">
            The preliminary program for the 2016 ASEEES Annual Convention is now
            available.
          </div>
        </div>
      </div>
      <div className="brand-calendar">
        <div className="calendar-container">
          <div className="calendar">
            <div className="brand-calendar-columns"></div>

            <div className="brand-calendar-columns">
              <div className="timer">
                <div className="time-value">
                  <span>360</span>
                  <span>DAYS</span>
                </div>
                <div className="time-value">
                  <span>56</span>
                  <span>HOURS</span>
                </div>
                <div className="time-value">
                  <span>49</span>
                  <span>MINUTES</span>
                </div>
                <div className="time-value">
                  <span>59</span>
                  <span>SECONDS</span>
                </div>
              </div>
              <div className="date">
                <img
                  src={require("../../assets/images/Timer.png")}
                  alt="Timer"
                />
                DECEMBER 18-21, 2016 IN KENYA
              </div>
            </div>

            <div className="brand-calendar-columns"></div>
            <div className="brand-calendar-columns">
              <div className="sponsor-icon">
                <span className="sponsor-title">Title Sponsor</span>
                <img
                  src={require("../../assets/images/SponsorIcon.png")}
                  alt="Bonyeza"
                />
              </div>
            </div>
            <div className="brand-calendar-columns">
              <div className="location">
                EA South West Veally, Canada, 123456
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
