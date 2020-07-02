import * as React from 'react';
import './style.scss';

import Navigator from 'Components/Navigator/render';

function HomePage():JSX.Element {
    return (
        <div className="home">
            <h1>My React App!</h1>
            <hr className="home__hr"/>
            <Navigator />
        </div>
    )
}

export default HomePage;
