import React, { Component } from 'react';


import './styles_individual_parts.css';
import Windows from './../../img/7_covering_individual_parts/all_windows.png';
import Kuzov from './../../img/7_covering_individual_parts/kuzov.png';
import Lobove from '../../img/7_covering_individual_parts/lobove.png';
import Textul_salon from '../../img/7_covering_individual_parts/textul_salon.png';
import Wheels from '../../img/7_covering_individual_parts/wheels.png';
import Inddividual_parts_Backgraund from '../../img/7_covering_individual_parts/background_car.jpg'

class Inddividual_parts extends Component{
	render(){
		return(
			<div className='inddividual_parts'>
				<div className='partsTitle'>
					<h2>нанопокриття окремих деталей </h2>
					<h3>зі знижкою при замовленні з сайту</h3>
				</div>
				<div className='partsHexagons'>
					
					

					<div className='hexRombWhiteBorder hex1'>
						<div className='hexagonbWhiteBorder'></div>
					</div>
					<div className='hexagonCostulForPrices hex1'>
						<div className='HexagonPrices'>
									<div className='HexagonPricesWhite'>
										<p>100$</p>
									</div>
									<div className='HexagonPricesBlue'>
										<p>від <span>80</span>$</p>
									</div>
						</div>
						<div className="hexRomb " >
							<div className="hexagon">
								
								<img src={Kuzov}/>
								<div className="moveUp">
									<p>кузов автомобіля</p>
									<a href='#forma' className="HexagonOrderButton"> замовити</a>
								</div>
							</div>
						</div>
					</div>
					<div className='hexRombWhiteBorder hex2'>
						<div className='hexagonbWhiteBorder'></div>
					</div>
					<div className='hexagonCostulForPrices hex2'>
						<div className='HexagonPrices'>
							<div className='HexagonPricesWhite'>
								<p>100$</p>
							</div>
							<div className='HexagonPricesBlue'>
								<p>від <span>80</span>$</p>
							</div>
						</div>
						<div className="hexRomb">
							<div className="hexagon">
								<img src={Wheels}/>
								<div className="moveUp">
									<p>колісні диски</p>
									<a href='#forma' className="HexagonOrderButton"> замовити</a>
								</div>
							</div>
						</div>
					</div>
					<div className='hexRombWhiteBorder hex3'>
						<div className='hexagonbWhiteBorder'></div>
					</div>
					<div className='hexagonCostulForPrices hex3'>
						<div className='HexagonPrices'>
							<div className='HexagonPricesWhite'>
								<p>100$</p>
							</div>
							<div className='HexagonPricesBlue'>
								<p>від <span>80</span>$</p>
							</div>
						</div>
						<div className="hexRomb" >
						<div className="hexagon">
							<img src={Lobove} />
							<div className="moveUp">
								<p>лобове скло</p>
								<a href='#forma' className="HexagonOrderButton"> замовити</a>
							</div>
						</div>
						</div>
					</div>
					<div className='hexRombWhiteBorder hex4'>
						<div className='hexagonbWhiteBorder'></div>
					</div>
					<div className='hexagonCostulForPrices hex4'>
						<div className='HexagonPrices'>
							<div className='HexagonPricesWhite'>
								<p>100$</p>
							</div>
							<div className='HexagonPricesBlue'>
								<p>від <span>80</span>$</p>
							</div>
						</div>
						<div className="hexRomb" >
							<div className="hexagon">
								<img src={Windows} />
								<div className="moveUp">
									<p>всі вікна</p>
									<a href='#forma' className="HexagonOrderButton"> замовити</a>
								</div>
							</div>
						</div>
					</div>
					<div className='hexRombWhiteBorder hex5'>
						<div className='hexagonbWhiteBorder'></div>
					</div>
					<div className='hexagonCostulForPrices hex5'>
						<div className='HexagonPrices'>
							<div className='HexagonPricesWhite'>
								<p>100$</p>
							</div>
							<div className='HexagonPricesBlue'>
								<p>від <span>80</span>$</p>
							</div>
						</div>
						<div className="hexRomb">
							<div className="hexagon">
								<img src={Textul_salon} />
								<div className="moveUp">
									<p>текстиль салону</p>
									<a href='#forma' className="HexagonOrderButton"> замовити</a>
								</div>
							</div>
						</div>
					</div> 
				</div> 
				<div className='partsBottom'>
					<p>Або замовте всі ці опції разом всього від <span>150</span>$</p>
					<div className='roundOrange'><p>Економія<br/><span>50$</span></p></div>
					<a href='#forma' className='individualPartsOrderButton' >замовляю</a>
				</div>
			</div>
		);
	}
}

export default Inddividual_parts;