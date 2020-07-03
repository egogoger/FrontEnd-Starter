import * as React from 'react';
import './style.scss';

import Footer from 'Components/Footer/render';

function HomePage():JSX.Element {
    return (
        <div className="home">
            <h1>My React App!</h1>
            <hr className="home__hr"/>
            <Footer />
        </div>
    )
}

export default HomePage;
