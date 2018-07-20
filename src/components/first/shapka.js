import React, { Component } from 'react';

import Logo from '../../img/1_shapka/logo.png';
import Header_background from '../../img/1_shapka/background.jpg';
import UserName_form from '../../img/1_shapka/UserName_form.png';
import UserPhone_form from '../../img/1_shapka/UserPhone_form.png';
import Phone from '../../img/1_shapka/phone.png';
import './shapka_styles.css';


class Shapka extends Component {
	render(){
		return(
			<div className='shapka'>
				<div className='logoHeader'>
					<div className='logoBlock'>
						<img className='logo' src={Logo} alt='logo'/>
						<div className='logoText'>
							<h2>професійний косметичний догляд</h2>
							<h2>за автомобілями</h2>
						</div>
					</div>
					<div className='callback'>
						<img src={Phone} />
						<p>+380 (3433) 55-758</p>
						<button>замовити зворотній дзвінок</button>  
					</div>
				</div>
				<div className='underLogoHeader'>
					<div className='underLogoHeaderBackground'></div>
					<div className='underLogoHeaderTextBackground'></div>
					<div className='underLogoHeaderTextBackgroundTriangles'>
						<div className='costulTriangle1'></div>
					</div>

					<div className='TextLeft'>
						<div className='underLogoHeaderTitle'>
							<h2>покриття кузова нанокерамікою</h2>
							<h2 className='orangeH2'>ce</h2><h2 className='blueH2'>nano i</h2><br/>
							<h3>це</h3><h2>бездоганний вигляд</h2><h3>та</h3><br/>
							<h2>надійний захист</h2><h3>вашого авто</h3><br/>
							<h3>на</h3><h2>цілих 24 місяці</h2><br/>
						</div>
						<div className='underLogoHeaderLikesText'>
							<img className='likeBlue' src='' />
							<p>Насолоджуйтесь ідеальним блиском!</p><br/>
							<img className='likeBlue' src=''/>
							<p>Економте до 70% на мийках!</p>
						</div>
						<div className='underLogoHeaderPricesText'>
							<p>Звичайна ціна від</p><h2>100$</h2><br/>
							<p>При замовленні з сайту акійна ціна від</p><div className='underLogoHeaderPrice80'>80$</div>
						</div>
					</div>
					<div className='FormRight'>
						<div className='FormRightTitle'>
							<h3>зарезервуйте зручний</h3>
							<h3>час для візиту та отримайте</h3>
							<h2>акційну ціну!</h2>							
						</div>
						<div className='FormRightForm'>
							<input type='text' name='UserName' placeholder="Ваше ім'я"/>
							<input type='text' name='UserPhone' placeholder='Телефон'/>
							<p>Обробка персональних даних конфіденційна</p>
							<button className='akziynaCzina'>хочу акційну ціну</button>
						</div>
						<p>* - оплата в гривнях за комерційним курсом</p>
					</div>

				</div>	
			</div>
		);
	}
}
export default Shapka;

/*
ReactDOM.render(<Shapka/>, document.getElementById('root'));   */