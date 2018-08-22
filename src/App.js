import React, { Component } from 'react';
import './fonts/fonts.css';
import Shapka from './components/first/shapka.js';
import Second from './components/second/second.js';
import Third from './components/third/third.js';
import Fourth from './components/fourth/fourth.js';
import Sixth from './components/sixth/sixth.js';
import Tenth from './components/tenth/tenth.js';
import Eighth from './components/eighth/eighth.js';
import Ninth from './components/ninth/ninth.js';
import Fifth from './components/fifth/fifth.js';


class App extends Component{
	render(){
		return(
			<div>
				<Shapka/>
				<Second />
				<Third /> 
				<Fourth />
				<Fifth />
				<Sixth />
				<Eighth />
				<Ninth />
				<Tenth />
			</div>
		 );
		
	}
}

export default App;
