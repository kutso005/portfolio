import React from "react";

export default function AboutMe() {
  return (
    <div className="container">
      <div className="about">
        <h1 className="about">
          обо <span>mne</span>
        </h1>
      </div>
      <div className="about-me">
        <div data-aos="flip-left" data-aos-duration="1000"  className="detil-about">
          <h3>Образование</h3>
          <h6>КОМТЕХНО</h6>
          <p>Прикладная информатика</p>
          <span>2021-2024 гг.</span>
        </div>
        <div data-aos="flip-up" data-aos-duration="1000"  className="detil-about">
          <h3>Курсы</h3>
          <h6>IT-школа Navis academy</h6>
          <p>Front-End Разработчик</p>
          <span>2022 г. феврал-май</span>
        </div>
        <div data-aos="flip-right" data-aos-duration="1000"  className="detil-about">
          <h3>Опыт работы</h3>
          <h6>Компания Navis.devs</h6>
          <p>Front-End Разработчик</p>
          <span>2022 г. июль -2024 г. май</span>
        </div>
      </div>
    </div>
  );
}
