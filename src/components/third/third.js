import React, { Component } from 'react';
import imgfirst from './../../img/3_principle_of_action/dirt.png';
import imgsecond from './../../img/3_principle_of_action/water.png';
import imgthird from './../../img/3_principle_of_action/snow.png';
import imgfourth from './../../img/3_principle_of_action/paint.png';
import imgfifth from './../../img/3_principle_of_action/corrosion.png';
import './third.css';

class Third extends Component {
  render() {
    return (
      <div className="third_container">
        <p className="third_zagolovok">принцип дії нанопокриття</p>
        <p className="thi-vlast"> властивості поверхні, <br /> на яку нанесено нано лак: </p>
	
    		<img src={imgfirst} alt="bryd" className="thi-first"/> 
    		<p className="thi-text thi-f">Не налипає бруд!</p>

    		<img src={imgsecond} alt="voda" className="thi-second"/> 
    		<p className="thi-text thi-s">Не затримується вода!</p>

    		<img src={imgthird} alt="snow" className="thi-third"/> 
    		<p className="thi-text thi-t">Не налипає сніг!</p>

    		<img src={imgfourth} alt="farba" className="thi-fourth"/> 
    		<p className="thi-text thi-fo">Не вигорає фарба!</p>

    		<img src={imgfifth} alt="corosia" className="thi-fifth"/> 
    		<p className="thi-text thi-fi">Не відбувається корозія</p>

        <p className="thi-neob">чому нанокераміка дійсно необхідна</p>

        <div className="thi-video">
      		<iframe width="95%" height="315" src="https://www.youtube.com/embed/6uRKjs7UNNQ?autohide=1" title="third" frameBorder="0" allowFullScreen></iframe>
      	</div>
        
      	<div className="thi-pytannia">
      		<p className="thi-pyt">Залишились питання щодо нано лаку? <br />
      		Замовте <span className="thi-white">безкоштовну</span> консультацію.</p>
      		<button className="thi-need">потрібна консультація</button>
      	</div>
      </div>
    );
  }
}

export default Third;
