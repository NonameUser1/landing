import React, { Component } from 'react';
import Shapka from './components/first/shapka.js';
import Second from './components/second/second.js';
import Third from './components/third/third.js';
import Fourth from './components/fourth/fourth.js';
import Tenth from './components/tenth/tenth.js';


class App extends Component{
	render(){
		return(
			<div>
				<Shapka/>
				<Second />
				<Third /> 
				<Fourth />
				<Eighth />
				<Tenth />
			</div>
		 );
	}
}

export default App;
