import React, { Component } from 'react';
import './eighth.css';
import imgf from './../../img/8_know_exact_price/clean_car1.png';
import * as firebase from "firebase";

class Eighth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mark: "",
            model: "",
            phone: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        firebase.database().ref('Want_to_know_price').push(this.state);
    }

  render() {
    return (
      <div className="eighth_container">
        <p className="eighth_zagolovok"> дізнайтесь точну вартість покриття вашого авто </p>
      	<span className="ei-we_need"> нам треба знати лише марку та модель 
            <p className="ei-zatel"> Зателефонуємо всього за 30 хвилин і повідомимо точну вартість </p>
        </span>
        <div className="ei-form">
            <form onSubmit={this.handleSubmit} method="post">
                <i className="fa fa-car icon"></i>                
                <input
                    type="text"
                    placeholder="Марка автомобіля"
                    name="mark"
                    className="ei-input ei-less"
                    value={this.state.mark}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <i className="fa fa-car icon"></i>
                <input
                    type="text"
                    placeholder="Модель автомобіля"
                    name="model"
                    className="ei-input ei-less"
                    value={this.state.model}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <i className="fa fa-user icon"></i>    
                <input
                    type="text"
                    placeholder="Ваше ім'я"
                    name="name"
                    className="ei-input"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <i className="fa fa-phone icon"></i>    
                <input
                    type="tel"
                    placeholder="Телефон"
                    name="phone"
                    className="ei-input ei-l"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <button className="ei-button">повідомити мене</button>
            </form>
        </div>
        
      </div>
    );
  }
}

export default Eighth;
