import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './pages/home/home';
import DictysPage from './pages/dictys/logic';
import AboutPage from './pages/about/about';

render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/dictys" component={DictysPage}/>
        <Route path="/about" component={AboutPage}/>
    </Switch>
  </BrowserRouter>,
  document.querySelector('#application')
);
