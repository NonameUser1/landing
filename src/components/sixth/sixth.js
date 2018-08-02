import React, { Component } from 'react';
import imgfirst from './../../img/6_how_cars_look/luks.png';
import imgsecond from './../../img/6_how_cars_look/ridkistnuy.png';
import imgthird from './../../img/6_how_cars_look/solidnuy.png';
import imgfourth from './../../img/6_how_cars_look/silver.png';
import imgfifth from './../../img/6_how_cars_look/black.png';
import imgsixth from './../../img/6_how_cars_look/yellow.png';
import './sixth.css';

class Sixth extends Component {
  render() {
    return (
      <div className="sixth_container">
        <p className="sixth_zagolovok">вигляд машини, що вже побували у наших майстрів!</p>

        <div className="si-galerry si-fi s-fl"> 
          <img src={imgfirst} alt="lux"/>
          <div className="si-desc">Коли у авто рідкісний колір, то і догляд має бути особливим!</div>
        </div>

        <div className="si-galerry si-se s-fl"> 
          <img src={imgsecond} alt="rid"/>
          <div className="si-desc">Авто класу "Люкс" завжди повинно блищати саме так яскраво!</div>
        </div>

        <div className="si-galerry si-thi s-fl"> 
          <img src={imgthird} alt="sol"/>
          <div className="si-desc">Солідний автомобіль тепер буде солідним у кожній дрібниці!</div>
        </div>

        <div className="si-galerry si-fo s-sl"> 
          <img src={imgfourth} alt="sriblo"/>
          <div className="si-desc">Тепер неповторний срібний металік буде викликати заздрощі у перехожих!</div>
        </div>

        <div className="si-galerry si-fif s-sl"> 
          <img src={imgfifth} alt="black"/>
          <div className="si-desc">Отримано насичений чорний колір, який буде таким не менше року!</div>
        </div>

        <div className="si-galerry si-si s-sl"> 
          <img src={imgsixth} alt="yellow"/>
          <div className="si-desc">Новими фарбами засяяв жовтий колір, і тепер є захист на два роки!</div>
        </div>

        <div className="si-foot">
          <button className="si-button"> теж так хочу! </button> 
        </div>

      </div>
    );
  }
}

export default Sixth;
