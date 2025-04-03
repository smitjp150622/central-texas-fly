import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import footerIcon from "../../assets/images/footer-icon.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import instaIcon from "../../assets/images/insta.svg";
import linkedInIcon from "../../assets/images/linkedin.svg";
import { footerLink } from "../../content";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container mx-auto">
        <div className="block sm:flex lg:flex justify-between">
          <div className="footer-wrapper_link">
            <div className="footer-icon">
              <img src={footerIcon} alt="footer icon" />
            </div>
            <div className="footer-link">
              <ul>
                {footerLink.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link to={link.url}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer-wrapper_social">
            <Link to="https://www.facebook.com/" target="_blank">
              <img src={facebookIcon} alt="facebook icon" />
            </Link>
            <Link to="#" target="_blank">
              <img src={instaIcon} alt="facebook icon" />
            </Link>
            <Link to="#" target="_blank">
              <img src={linkedInIcon} alt="facebook icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center">
        © 2024 Central Texas Fly Fishing All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
