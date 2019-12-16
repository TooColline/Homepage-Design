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
                <div>
                  <img
                    src={require("../../assets/images/Timer.png")}
                    alt="Timer"
                  />
                </div>
                <div>DECEMBER 18-21, 2016 IN KENYA</div>
              </div>
            </div>

            <div className="brand-calendar-columns">
              <div className="people">
                <div className="people-icon">
                  <img
                    src={require("../../assets/images/Person.png")}
                    alt="People"
                  />
                </div>
                <div className="people-values">
                  <h4>SEATS</h4>
                  <p>300 People</p>
                </div>
              </div>
              <div className="speaker">
                <div className="speaker-icon">
                  <img
                    src={require("../../assets/images/SpeakerIcon.png")}
                    alt="Speaker"
                  />
                </div>
                <div className="speaker-values">
                  <h4>SPEAKERS</h4>
                  <p>16 Professional</p>
                </div>
              </div>
            </div>
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
                <div className="location-icon">
                  <img height="25px"
                    src={require("../../assets/images/LocationIcon.png")}
                    alt="Location"
                  />
                </div>
                <div className="location-value">
                  <p>EA South West Veally, Canada, 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
