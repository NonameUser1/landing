import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCVWcLsPCXr2b5SBIyCDGayXwCDjcR49no",
    authDomain: "lendingb-210716.firebaseapp.com",
    databaseURL: "https://lendingb-210716.firebaseio.com",
    projectId: "lendingb-210716",
    storageBucket: "lendingb-210716.appspot.com",
    messagingSenderId: "847999661527"
  };
firebase.initializeApp(config);


ReactDOM.render(<App/> , document.getElementById('root'));
