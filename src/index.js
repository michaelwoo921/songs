import React from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import ReactDOM from 'react-dom';

import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>, 
document.querySelector('#root'));