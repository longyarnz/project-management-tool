import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.querySelector('main'));

serviceWorker.register();
