import React, { Component } from 'react';
import './fonts/fonts.css';
import Shapka from './components/first/shapka.js';
import Second from './components/second/second.js';
import Third from './components/third/third.js';
import Fourth from './components/fourth/fourth.js';
import Sixth from './components/sixth/sixth.js';
import Tenth from './components/tenth/tenth.js';
import Eighth from './components/eighth/eighth.js';
import Seven from './components/seven/individual_parts.js'


class App extends Component{
	render(){
		return(
			<div>
				{/*
				<Shapka/>
				
				<Second />
				<Third /> 
				<Fourth />
				
				<Sixth />
				<Seven />
				<Eighth />
				*/}
				
				
				<Tenth />
				{ /* 				
								
								
								
								
								
							*/}
			</div>
		 );
		
	}
}

export default App;
