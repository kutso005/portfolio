import React from "react";
import { FaTelegram } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="container">
      <h1 className="about">
        обсудим <span>project?</span>
      </h1>
      <div className="telegram">
        <FaTelegram size={70} color="#0066FF" />
        <a href="https://t.me/altynbekovz" target="_blank">
          altynbekovz
        </a>
      </div>
      <div className="btn-contact">
        <button  data-aos="zoom-in" data-aos-duration="1000"  className="btn-mobil">
          <a href="https://t.me/altynbekovz" target="_blank">
            Telegram
          </a>
        </button>
        <button  data-aos="zoom-in" data-aos-duration="1000"  className="btn-mobil">
          <a href="https://wa.me/996777111797" target="_blank">
            WhatsApp
          </a>
        </button>
        <button   data-aos="zoom-in" data-aos-duration="1000"  className="btn-mobil">
          <a
            href="https://www.instagram.com/qwts_k?igsh=N2d2enFmd25oY3Nn&utm_source=qr"
            target="_blank"
          >
            Instagram
          </a>
        </button>
        <button  data-aos="zoom-in" data-aos-duration="1000"  className="btn-mobil">
          <a href="https://github.com/kutso005" target="_blank">
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
}
