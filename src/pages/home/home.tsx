import * as React from 'react';
import Navigator from '../../components/navigator/navigator';

import './home.scss';

export default function HomePage() {
    return (
        <div className="home">
            <h1>My React App!</h1>
            <hr className="home__hr"/>
            <Navigator />
        </div>
    )
};
