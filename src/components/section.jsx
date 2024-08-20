import React, { useState } from "react";
import logo from "./../image/kur.jpg";
export default function Section() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="container">
      <div className="section top">
        <div>
          <div className="front-end">
            <div>
              <span className="front">front</span>
              <span className="end">-end</span>
            </div>
            <div>
              <span className="developer">Разработчик</span>
            </div>
          </div>
          <div className="text">
            <span>Front-End разработчик:</span> Я - Front-End разработчик с 2
            годами опыта работы, специализирующийся на создании качественных и
            удобных сайтов и мобильных приложений.
            <br />
            <span>Опыт работы:</span>
            <div className={`tes ${isExpanded ? "expanded" : ""}`}>
              Front-End Разработчик в компании Navis.devs, где активно участвую
              в создании и поддержке веб-приложений для клиентов. Эффективное
              взаимодействие с другими членами команды, участие в обсуждениях
              архитектуры и принятие решений разработки.
              <br />
              <span>Образование</span>: Заочный студент в колледже, изучающий
              современные технологии в области разработки программного
              обеспечения.
              <br />
              <span>Дополнительные навыки:</span> Уверенное владение фреймворком
              React , Vue  и библиотеками для разработки интерфейсов. Опыт работы с Git
              для версионного контроля и совместной работы над проектами.
            </div>
            <br />
            <p onClick={toggleText}>
              {isExpanded ? "Скрыть" : "Читать дальше"}
            </p>
          </div>
          <button  className="btn">Обсудить проект</button>
        </div>
        <img   data-aos="zoom-in" data-aos-duration="1000"  src={logo} alt="" className="logo" />
      </div>
    </div>
  );
}
