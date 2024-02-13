import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        WAMOTO TIMOTHY
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#myprojects">My Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/timothy-wamoto-1b8b751a4">
          <BsLinkedin />
        </a>
        <a href="https://github.com/wamototimothy">
          <BsGithub />
        </a>
        {/* <a href="https://medium.com/@thakshiladb2000">
          <BsMedium />
        </a> */}
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {currentYear} <b>Wamoto Timothy.</b> All rights reserved, bruh!.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
