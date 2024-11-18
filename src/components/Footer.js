import React from "react";
import Logo from "../assets/Logo_2.svg";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter X.png";
import Facebook from "../assets/facebook.png";
import Nav from "./Nav";

function Footer() {
  return (
    <footer>
      <div>
        <img src={Logo} alt="Logo of Little Lemon" />
      </div>

      <Nav id="footer-nav" />

      <div className="category contact-info">
        <h3>Contact Info</h3>
        <p>1 Hacker Way, Menlo Park, CA 94025, U.S.</p>
        <p>(123) 456-7890</p>
        <p>sample@gmail.com</p>
      </div>

      <div className="category social-media">
        <h3>Social Media</h3>
        <div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram Logo" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter Logo" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
