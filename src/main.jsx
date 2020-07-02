import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import HomePage from './pages/home/home';
import DictysPage from './pages/dictys/Render';
import AboutPage from './pages/about/about';
import reducer from "./store/reducers/MainReducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/dictys" component={DictysPage}/>
                <Route path="/about" component={AboutPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#application')
);
