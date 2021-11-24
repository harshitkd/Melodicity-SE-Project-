import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import App from './App.js'
import store from './redux/store.js';

it('renders without crashing' , () => {
    const div = document.createElement('div');
    ReactDom.render(<Provider store={store}><App /></Provider>, div);
    ReactDom.unmountComponentAtNode(div);
})