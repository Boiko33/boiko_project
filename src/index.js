import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 import blogData from "./state"
 


ReactDOM.render(
<App blogData={blogData} />
, document.getElementById('root'));


serviceWorker.unregister();
