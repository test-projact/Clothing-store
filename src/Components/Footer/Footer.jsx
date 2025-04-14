import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOOPER</p>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icons-contaner">
          <Link>
            <img src={instagram_icon} alt="" />
          </Link>
        </div>
        <div className="footer-icons-contaner">
          <Link>
            <img src={pintester_icon} alt="" />
          </Link>
        </div>
        <div className="footer-icons-contaner">
          <Link>
            <img src={whatsapp_icon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
