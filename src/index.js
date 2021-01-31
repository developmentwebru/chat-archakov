import React from 'react';
import {Provider} from "react-redux"
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import store from "./redux/store";
import 'emoji-mart/css/emoji-mart.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

