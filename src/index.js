import React from 'react';
import ReactDOM from 'react-dom';

import "@/assets/css/bootstrap-reboot.min.css"
import "@/assets/css/bootstrap-grid.min.css"
import "@/assets/css/lib.css"
import "@/assets/css/listPage.css"

import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
