import React, { Component } from 'react';
import './fifth.css';
import imgf from './../../img/5_why_you_should_order_us/mateials.png';
import imgs from './../../img/5_why_you_should_order_us/qualification.png';
import imgt from './../../img/5_why_you_should_order_us/gears.png';
import imgfo from './../../img/5_why_you_should_order_us/prices.png';
import imgtest from './../../img/5_why_you_should_order_us/rombez.png';

class Second extends Component {
  render() {
    return (
      <div className="fifth_container">
      	<p className="fifth_zagolovok">чому нанопокриття слід замовити саме у нас 
      	<br /><span> кілька переконливих доказів: </span> </p>
      	
      	<div className="f-div f-fi">
      		<img src={imgf} alt="materials" className="fif-gal-img"/>
      		<p className="f-zag"> якісні матеріали </p>
      		<p className="f-exp"> Ми використовуємо засіб CeNano I, який виробляється в Німеччині і вже давно став визнаним світовим брендом </p>
      	</div>

      	<div className="f-div f-sec">
      		<img src={imgs} alt="qualification" className="fif-gal-img"/>
      		<p className="f-zag"> висока кваліфікація </p>
      		<p className="f-exp"> Наші фахівці вчилися наносити нанолак у кращих майстернях Європи та мають більше ніж 8 років практичного досвіду </p>
      	</div>

      	<div className="f-div f-thi">
      		<img src={imgt} alt="gears" className="fif-gal-img"/>
      		<p className="f-zag"> професійне обладнання </p>
      		<p className="f-exp"> Сучасне обладнання дохволяє нам завжди домагатися максимальної ефективності нашої роботи </p>
      	</div>

      	<div className="f-div f-fou">
      		<img src={imgfo} alt="prices" className="fif-gal-img"/>
      		<p className="f-zag"> доступні ціни </p>
      		<p className="f-exp"> Ми завжди надаємо клієнтам можливість відчутно зекономити за рахунок акцій, знижок та подарунків </p>
      	</div>

		<div className="fif-foot-f hex">
			<div>
			 	<img src={imgtest} className="fif-foot-img" />
				<p className="fif-hex-text"> 1 рік </p>
			</div>
			<p> Гарантії ми надаємо на всі використані матеріали та нашу роботу </p>
		</div>      	

		<div className="fif-foot-s hex">
			<div> 
				<img src={imgtest} className="fif-foot-img" />
				<p className="fif-hex-text"> 100% </p>
			</div>
			<p> Повертаємо гроші, якщо результат вам не сподобався </p>
		</div>

		<div className="fif-foot-t hex">
			<div> 
				<img src={imgtest} className="fif-foot-img" />
				<p className="fif-hex-text"> +750 </p>
			</div>
			<p> Власників авто вже насолоджуються перевагами нанопокриття </p>
		</div>

      </div>
    );
  }
}

export default Second;