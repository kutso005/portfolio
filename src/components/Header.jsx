import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
export default function Header() {
  return (
   <div >
     <div className="container">
      <div className="header">
        <div>
          <h5>altynbekovz</h5>
        </div>
        <div className="About_Us">
          <p>Обо мне</p>
          <p>Скиллы</p>
          <p>проекты</p>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/qwts_k?igsh=N2d2enFmd25oY3Nn&utm_source=qr" target="_blank" className="inst">
            <FaInstagram fontSize={"20px"} color={"#fff"} />
          </a>
          <a href="https://wa.me/996777111797" className="inst">
            <FaWhatsapp fontSize={"20px"} color={"#fff"} />
          </a>
          <a a href="https://t.me/altynbekovz" className="inst">
            <FaTelegramPlane fontSize={"20px"} color={"#fff"} />
          </a>
          <a a href="https://github.com/kutso005" className="inst">
            <FaGithub fontSize={"20px"} color={"#fff"} />
          </a>
        </div>
      </div>
    </div>
    <div className="lin"></div>
   </div>
  );
}
