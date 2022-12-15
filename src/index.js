import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import store from './data/store';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));



let rerenderDOM = () =>
    root.render(
        <BrowserRouter>
            <Provider store={reduxStore}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>
    );

rerenderDOM(reduxStore.getState());
reduxStore.subscribe(() => {
    let state = reduxStore.getState();
    rerenderDOM(state);
});
