import React from "react";
import "./style/Sponsors.scss";

const Sponsors = () => {
  return (
    <div id="partners" className="sponsors-container">
      <h2 className="sponsors-title">Current &#38; Past Sponsors</h2>
      <div className="sponsors-images">
        <img
          src={require("../../assets/images/Microsoft.png")}
          alt="Miscrosoft"
        />
        <img
          src={require("../../assets/images/Avago.png")}
          alt="Avago"
        />
        <img
          src={require("../../assets/images/Success Idea.png")}
          alt="Success Idea"
        />
        <img
          src={require("../../assets/images/MSS.png")}
          alt="MSS"
        />
        <img
          src={require("../../assets/images/tyco.png")}
          alt="Tyco"
        />
        <img
          src={require("../../assets/images/Symantec.png")}
          alt="Symantec"
        />
        <img
          src={require("../../assets/images/Texas Instruments.png")}
          alt="Texas Instruments"
        />
        <img
          src={require("../../assets/images/TechSolution.png")}
          alt="TechSolution"
        />
        <img
          src={require("../../assets/images/Exabytes.png")}
          alt="Exabytes"
        />
        <img
          src={require("../../assets/images/CodeGuard.png")}
          alt="Code Guard"
        />
        <img
          src={require("../../assets/images/PSEG.png")}
          alt="PSEG"
        />
        <img
          src={require("../../assets/images/Sarmen.png")}
          alt="Sarmen"
        />
        <img
          src={require("../../assets/images/Digilent.png")}
          alt="Digilent"
        />
        <img
          src={require("../../assets/images/BlueBird.png")}
          alt="BlueBird"
        />
        <img
          src={require("../../assets/images/GreenWater.png")}
          alt="GreenWater"
        />
      </div>
    </div>
  );
};

export default Sponsors;
