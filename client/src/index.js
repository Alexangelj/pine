import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, vanillaPromise } from 'redux';
import allReducers from './reducers/index';
import thunk from 'redux-thunk';


const store = createStore(
    allReducers,
    applyMiddleware(thunk)
  );

ReactDOM.render(
    <Provider store={store}>
        <Container fluid>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                </Switch>
            </BrowserRouter>
        </Container>
    </Provider>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
