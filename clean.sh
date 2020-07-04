#!/bin/bash

# Delete static files
rm -rf static/icons
rm -rf static/images

echo '' > src/main.scss
echo "import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './main.scss';

import store from './store/store';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>

            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#application')
);" > src/main.jsx

# Clean Utils
echo '' > src/utils/constants.ts
echo '' > src/utils/interfaces.ts
echo '' > src/utils/variables.scss

# Clean store
echo "import { combineReducers } from 'redux';

const reducer = combineReducers({

});

export default reducer;" > src/store/reducers/MainReducer.ts
rm src/store/reducers/Person.ts

echo "" > src/store/actions/ActionTypes.ts
rm src/store/actions/Person.ts

# Delete pages
rm -rf src/pages
mkdir src/pages

# Delete models
rm src/models/PersonModel.ts

# Delete components
rm -rf src/components
mkdir src/components

# Delete clean file itself
rm clean.sh
