import React from "react";
import js from "./../image/js.svg";
import react from "./../image/react.svg";
import html from "./../image/html.svg";
import css from "./../image/css.svg";
import next from "./../image/Nextjs.svg";
import api from "./../image/api.svg";
import git from "./../image/github.svg";
import redux from "./../image/mar.svg";
import Git from "./../image/git.svg";
import seo from "./../image/soe.svg";
import bootstrap from "./../image/bootstrap.svg";
import mat from "./../image/materialUI.svg";
import ui from "./../image/tailwild.svg";
import vue from "./../image/Vue.svg";
import figma from "./../image/figma.svg";
import i18n from "./../image/i18n.png";
import sass from "./../image/sass.png";
import map from "./../image/map.png";

export default function Programms() {
  return (
    <div className="container">
      <div className="programms">
        <h1 className="about">
          работаю на <span>programms</span>
        </h1>
      </div>
      <div className="java">
        <img data-aos="zoom-in" data-aos-duration="1000" src={js} alt="" />
        <img data-aos="fade-up" data-aos-duration="1000" src={react} alt="" />
        <img data-aos="fade-down" data-aos-duration="1000" src={html} alt="" />
        <img
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="vue"
          src={vue}
          alt=""
        />
        <img data-aos="zoom-in" data-aos-duration="1000" src={next} alt="" />
        <img
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          src={api}
          alt=""
        />
      </div>
      <div className="redux">
        <img data-aos="zoom-in" data-aos-duration="1000" src={git} alt="" />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          src={redux}
          alt=""
        />
        <img
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          src={Git}
          alt=""
        />
        <img
          className="lefts"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          src={seo}
          alt=""
        />
        <img
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          src={bootstrap}
          alt=""
        />
        <img
          className="none"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          src={ui}
          alt=""
        />
      </div>
      <div className="materialUI">
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          src={mat}
          alt=""
        />
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          src={ui}
          alt=""
        />
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          src={css}
          alt=""
        />
        <img
          className="i18n"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          src={i18n}
          alt=""
        />
      </div>
      <div className="figma">
        <img
          className="sass"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          src={sass}
          alt=""
        />
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          src={figma}
          alt=""
        />
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          src={map}
          alt=""
        />
      </div>
    </div>
  );
}
