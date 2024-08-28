import React from "react";
import xbt from "./../image/xbt.svg";
import navis from "./../image/navis.svg";
import beket from "./../image/beket.svg";
import resident from "./../image/resident.svg";
import railway from "./../image/railway.svg";
import bitok from "./../image/bitok.svg";
import nomads from "./../image/nomads.svg";
export default function Projects() {
  return (
    <div className="container">
      <h1 className="about">
        мои <span>projects</span>
      </h1>
      <div className="projects">
    
      <div className="felx">
      <div data-aos="flip-up" data-aos-duration="1000"  className="xbtx">
          <img className="xbts" src={xbt} alt="" />
          <p>Сайт для обмена и продажи криптовалюты: <a href="https://beta.xbt.kg" target="_blank">Xbt.kg</a></p>
          <button className="btn-project"> <a href="https://beta.xbt.kg/" target="_blank">Посмотреть сайт</a></button>
        </div>
        <div  data-aos="zoom-in"  >
          <img  className="beket" src={bitok} alt="" />
          <p>Сайт для обмена и продажи криптовалюты: <a href="https://bitok.website" target="_blank">bitok.kg</a></p>
          <button className="btn-project">  <a href="https://bitok.website" target="_blank">Посмотреть сайт</a></button>
        </div>
       
      </div>
      <div className="felx">
      <div  data-aos="zoom-in"   className="xbtx">
          <img className="beket" src={beket} alt="" />
          <p>Сайт для покупки билетов на автобус: <a href="https://beket.kg" target="_blank">beket.kg</a></p>
          <button className="btn-project"> <a href="https://beket.kg" target="_blank">Посмотреть сайт</a></button>
        </div>
        <div  data-aos="zoom-in" >
          <img className="beket" src={resident} alt="" />
          <p>Сайт для получения услуг и информации: <a href="https://resident.kg" target="_blank">resident.kg</a></p>
          <button className="btn-project"> <a href="https://resident.kg" target="_blank">Посмотреть сайт</a></button>
        </div>
      </div>
      <div className="felx">
      <div  data-aos="zoom-in"   className="xbtx">
          <img className="beket" src={railway} alt="" />
          <p>Сайт для покупки билетов на поезда: <a href="https://ticket.railway.kg/" target="_blank">ticket.railway.kg</a></p>
          <button className="btn-project"> <a href="https://ticket.railway.kg/" target="_blank">Посмотреть сайт</a></button>
        </div>
        <div  data-aos="zoom-in"   className="xbtx">
          <img className="xbts"  src={nomads} alt="" />
          <p>Туристическая компания <a href="https://nomads-life.com/" target="_blank">Nomads Life</a> по всему Кыргызстану и Центральной Азии </p>
          <button className="btn-project"> <a href="https://nomads-life.com/" target="_blank">Посмотреть сайт</a></button>
        </div>
      </div>
      </div>
    </div>
  );
}
