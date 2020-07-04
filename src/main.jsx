import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './main.scss';

import store from "./store/store";
import HomePage from 'Pages/Home/render';
import DemoPage from 'Pages/Dictys/render';
import AboutPage from 'Pages/About/render';
import SetupsPage from 'Pages/Setups/render';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/demo" component={DemoPage}/>
                <Route path="/setups" component={SetupsPage}/>
                <Route path="/contribute" component={AboutPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#application')
);
