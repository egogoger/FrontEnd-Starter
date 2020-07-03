import * as React from 'react';
import './style.scss';

import Footer from 'Components/Footer/render';

function AboutPage():JSX.Element {
    return (
        <div className="about">
            <h1>About page</h1>
            <hr className="about__hr"/>
            <Footer />
        </div>
    );
}

export default AboutPage;
