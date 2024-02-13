import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/Timo.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Timothy Wamoto,</h1>
        <h5 className="text-light">A Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
