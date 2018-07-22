import React, { Component } from 'react';
import imgfirst from './../../img/2_what_it_gives/bright.png';
import imgsecond from './../../img/2_what_it_gives/gidrofobEfect.png';
import imgthird from './../../img/2_what_it_gives/selfCleaning.png';
import imgfourth from './../../img/2_what_it_gives/vidnovlenna.png';
import imgfifth from './../../img/2_what_it_gives/zabrydnenna.png';
import imgsixth from './../../img/2_what_it_gives/econom.png';
import './second.css';

class Second extends Component {
  render() {
    return (
      <div className="second_container">
      	<p className="second_zagolovok">що дає нанокераміка cenano і
      	<br/>ваші безсумнівні вигоди</p><br/>
      	<div className="s-first">
      		<img src={imgfirst} alt="bright"/>
      		<p className="s-miniH">яскравий вигляд</p>
      		<p className="s-explain">Лаку повертається первозданний блиск, а фарбі глибина кольору</p>
      	</div>
      	<div className="s-second">
      		<img src={imgsecond} alt="gidro"/>
      		<p className="s-miniH">гідрофобний ефект</p>
      		<p className="s-explain">Вода та сніг не затримуються на деталях, вкритих нанокерамікою</p>
      	</div>
      	<div className="s-third">
      		<img src={imgthird} alt="cleaning"/>
      		<p className="s-miniH">ефект "самоочищення"</p>
      		<p className="s-explain">Бруд не тримається на нано лаку, і вода, що стікає, просто змиває його</p>
      	</div>

      	<div className="s-video">
      		<iframe width="95%" height="315" src="https://www.youtube.com/embed/xzP0yepWcB4?autohide=1" title="second" frameBorder="0" allowFullScreen></iframe>
      	</div>

      	<div className="s-fourth">
      		<img src={imgfourth} alt="vidnov"/>
      		<p className="s-miniH">відновлення лфп</p>
      		<p className="s-explain">Нано лак заповнює всі мікротріщини і поверхня стає ідеально гладкою</p>
      	</div>
      	<div className="s-fifth">
      		<img src={imgfifth} alt="zabryd"/>
      		<p className="s-miniH">зменшення забруднення</p>
      		<p className="s-explain">Нанокераміка не дає бруду та бактеріям затримуватись на кузові</p>
      	</div>
      	<div className="s-sixth">
      		<img src={imgsixth} alt="econom"/>
      		<p className="s-miniH">економія на мийках</p>
      		<p className="s-explain">Після нанесення нанокераміки їздити на мийку можна втричі рідше</p>
      	</div>
      </div>
    );
  }
}

export default Second;
