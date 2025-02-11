import React from "react";
import "./Footer.css";
import logoWhite from "../Image/logo-Npoca-white.png";

import whatsapp from "../Image/whatsapp.png";
import telegram from "../Image/telegram.png";
import youtube from "../Image/youtube.png";
import facebook from "../Image/facebook.png";
import message from "../Image/email.png";
import phone from "../Image/phone.png";

import linkedin from "../Image/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="upper">
          <h2 className="upper-h2">Stay Updated!</h2>
          <p className="upper-p">
            Be informed about our sessions, get notified on entrance test
            announcements and
          </p>
          <p className="lower-p">
            access new career resources.<strong> Connect with us!</strong>
          </p>
          <div className="boxes">
            <a
              href="https://api.whatsapp.com/message/454W2XXUX4MQG1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="box"
            >
              <img src={whatsapp} alt="WhatsApp" />
              <p className="paralogo">Chat with us</p>
            </a>
            <a
              href="https://t.me/npoca"
              target="_blank"
              rel="noopener noreferrer"
              className="box"
            >
              <img src={telegram} alt="Telegram" />
              <p className="paralogo">Join group</p>
            </a>
            <a
              href="https://www.youtube.com/c/NPOCA"
              target="_blank"
              rel="noopener noreferrer"
              className="box"
              id="box2"
            >
              <img src={youtube} alt="YouTube" />
              <p className="paralogo">Subscribe</p>
            </a>
          </div>
        </div>

        <div className="lower">
          <div className="div1">
            <img src={logoWhite} alt="logo" className="logo1" />
            <p className="lower-para">
              At NPOCA, we are attempting to build comprehensive career services
              for school students, which would help them identify their talent,
              explore opportunities and make informed career decisions using the
              best resource available globally.
            </p>
            <br />
            <p className="lower-para-br">
              Copyright 2022. NPOCA All Rights Reserved.
            </p>
          </div>
          <div className="div2">
            <a
              href="#"
              className="linkpara"
              target="_blank"
              rel="noopener noreferrer"
            >
              About US
            </a>
            <a
              href="#"
              className="linkpara"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resources
            </a>
            <a
              href="#"
              className="linkpara"
              target="_blank"
              rel="noopener noreferrer"
            >
              What we offer
            </a>
            <a
              href="#"
              className="linkpara"
              target="_blank"
              rel="noopener noreferrer"
            >
              Events
            </a>
            <a
              href="#"
              className="linkpara"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="linkpara"
              target="_blank"
              rel="noopener noreferrer"
            >
              Press & Media Coverage
            </a>
          </div>
          <div className="div3">
            <a
              href="https://www.facebook.com/NPOCAInd/"
              target="_blank"
              rel="noopener noreferrer"
              className="div3link"
            >
              <img src={facebook} alt="facebook" /> Facebook
            </a>
            <a
              href="https://www.youtube.com/channel/UCGG1BYfTyo-_MhjcDGZT3Kg"
              target="_blank"
              rel="noopener noreferrer"
              className="div3link"
              id="di3"
            >
              <img src={youtube} alt="youtube" /> Youtube
            </a>
            <a
              href="https://www.linkedin.com/company/npocaindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="div3link"
            >
              <img src={linkedin} alt="linkedin" /> Linkedin
            </a>
          </div>
          <div className="div4">
            <a
              href="mailto:arun@npoca.com"
              target="_blank"
              rel="noopener noreferrer"
              className="div4link"
            >
              <img src={message} alt="message" />
              arun@npoca.com
            </a>
            <a
              href="tel:+91%208588013322"
              target="_blank"
              rel="noopener noreferrer"
              className="div4link"
            >
              <img src={phone} alt="phone" />
              +918588013322
            </a>
            <div className="links">
              <a href="/disclaimer" className="link">
                Disclaimer
              </a>
              <a href="/privacy" className="link">
                |Privacy
              </a>
              <a href="/terms" className="link">
                |Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
