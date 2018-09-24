import React, { Component } from 'react';

import Logo from '../../img/1_shapka/logo.png';
import Header_background from '../../img/1_shapka/background.jpg';
import UserName_form from '../../img/1_shapka/UserName_form.png';
import UserPhone_form from '../../img/1_shapka/UserPhone_form.png';
import Phone from '../../img/1_shapka/phone.png';
import Like from '../../img/1_shapka/like.png';
import './shapka_styles.css';
import './responsive.css';

import * as firebase from "firebase";


class Shapka extends Component {

	constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            UserPhone: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        firebase.database().ref('Promotional_price').push(this.state);
    }

	render(){
		return(
			<div className='shapka' id='shapa'>
				<div className='logoHeader'>
					<div className='logoBlock'>
						<img className='logo' src={Logo} alt='logo'/>
						<div className='logoText'>
							<h2>професійний косметичний догляд</h2>
							<h2>за автомобілями</h2>
						</div>
					</div>
					<div className='callback'>
						<div className='callbackPhone'>
							<img src={Phone} />
							<p>+380 (3433) 55-758</p>
						</div>						
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
							<h2>покриття кузова нанокерамікою </h2>
							<h2 id='orangeH2'>ce</h2><h2 id='blueH2'>nano i</h2><br/>
							<h3>це</h3><h2> бездоганний вигляд</h2><h3> та</h3><br/>
							<h2>надійний захист</h2><h3> вашого авто</h3><br/>
							<h3>на </h3><h2>цілих 24 місяці</h2><br/>
						</div>
						<div className='underLogoHeaderLikesText'>
							<img src={Like} />
							<p>Насолоджуйтесь ідеальним блиском!</p><br/>
							<img src={Like}/>
							<p>Економте до 70% на мийках!</p>
						</div>
						<div className='underLogoHeaderPricesText'>
							<p>Звичайна ціна від </p><p >100$</p><br/>
							<p>При замовленні з сайту акійна ціна від</p>
						</div>
						<div className='underLogoHeaderPrice80'>80$</div>
					</div>
					<div className='FormRight'>
						<div className='FormRightTitle'>
							<h3>зарезервуйте зручний</h3>
							<h3>час для візиту та отримайте</h3>
							<h2>акційну ціну!</h2>							
						</div>
						<form className='FormRightForm' onSubmit={this.handleSubmit}>
							<i className="material-icons">person</i>
							<input type='text' name='UserName' value={this.state.UserName} onChange={this.handleChange} placeholder="Ваше ім'я"/>
							<i className="material-icons">call</i> 
							<input type='text' name='UserPhone' value={this.state.UserPhone} onChange={this.handleChange} placeholder='Телефон'/>
							<p>Обробка персональних даних конфіденційна</p>
							<button className='akziynaCzina'>хочу акційну ціну</button>
						</form>
						<p>* - оплата в гривнях за комерційним курсом</p>
					</div>

				</div>	
			</div>
		);
	}
}
export default Shapka;