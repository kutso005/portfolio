import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Main() {
  const settingsLeft = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsRight = {
    ...settingsLeft,
    rtl: true, 
  };

  return (
    <div>
      <SlickSlider {...settingsLeft}>
        <button className="btn-mobile">мобильные приложения</button>
        <button className="btn-mobile">сайты</button>
        <button className="btn-mobile">лендинги</button>
        <button className="btn-mobile">вёрстка</button>
        <button className="btn-mobile">многостраничные сайты</button>
      </SlickSlider>

      <SlickSlider {...settingsRight}>
        <button className="btn-mobile tops">мобильные приложения</button>
        <button className="btn-mobile tops">сайты</button>
        <button className="btn-mobile tops">лендинги</button>
        <button className="btn-mobile tops">вёрстка</button>
        <button className="btn-mobile tops">многостраничные сайты</button>
      </SlickSlider>
    </div>
  );
}
