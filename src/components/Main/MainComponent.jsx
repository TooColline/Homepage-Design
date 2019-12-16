import React from "react";
import NavBar from "../Content/NavBar";
import Brand from "../Content/Brand";
import Explore from "../Content/Explore";
import Speakers from "../Content/Speakers";
import Venue from "../Content/Venue";
import Customer from "../Content/Customer";
import Sponsors from "../Content/Sponsors";
import Footer from "../Content/Footer";

function MainComponent() {
  return (
    <div className="main-component">
      <NavBar />
      <Brand />
      <Explore />
      <Speakers />
      <Venue />
      <Sponsors />
      <Customer />
      <Footer />
    </div>
  );
}

export default MainComponent;
