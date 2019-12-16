import React from "react";
import Logo from "./Logo";
import "./style/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-copyright">
      <div className="footer">
        <Logo />
        <span className="footer-text">Subscribe to our Newsletter</span>
        <form action="#" className="footer-subscribe">
          <input
            type="email"
            className="footer-input"
            placeholder="Email address"
          />
          <button className="btn btn-gradient">Done</button>
        </form>
      </div>
      <div className="copyright">
        <span className="footer-copyright">&copy; THEMEXPERT</span>
        <div onClick={() => window.location.href = "#root"} className="arrow-up">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
