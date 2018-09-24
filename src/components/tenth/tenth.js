import React, { Component } from 'react';
import './tenth.css';
import MyMapComponent from './map.js';
import imgfirst from './../../img/foot/location.png';
import imgsecond from './../../img/foot/phone.png';
import imgthird from './../../img/foot/email.png';


class Tenth extends Component {
  render() {
    return (
      <div className="tenth_container">
          <div className="ten-shapka"> 
            <p>ми будемо раді, якщо ви завітаєте до нас! <br/> нас дуже просто знайти </p>
          </div>

        <MyMapComponent isMarkerShown/>

          <div className="ten-foot">
            <p>але акційну ціну можна зерезервувати <span> тільки тут </span>! </p>
            <a href='#shapa'> хочу акційну ціну </a>
          </div>

          <div className="foot">  
            <img src={imgfirst} alt="location" className="foot-loc"/> 
            <p className="foot-ftext">м. Коломия, вул. Мазепи, 305</p> 
            <img src={imgsecond} alt="phone" className="foot-pho"/>
            <p className="foot-stext">+380 (3433) 55-758 </p> 
            <img src={imgthird} alt="email" className="foot-email"/>
            <p className="foot-ttext">info@makeauto.cool</p>
          </div>

      </div>
    );
  }
}

export default Tenth;