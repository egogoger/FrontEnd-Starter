import * as React from 'react';
import './home.scss';

import Navigator from '../../components/Navigator/Render';

function HomePage() {
    return (
        <div className="home">
            <h1>My React App!</h1>
            <hr className="home__hr"/>
            <Navigator />
        </div>
    )
}

export default HomePage;
