import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import Contacts from "./components/Contacts"
import { rootReducer } from "./components/store/reducers";
import {createStore} from "redux";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        // @ts-ignore
        <Contacts/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();