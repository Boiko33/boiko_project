import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from "./store";
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from "./store.js";


ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop />
        <App blogData={store.state.blogData} />
    </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
