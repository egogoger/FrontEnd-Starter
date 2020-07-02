import * as React from 'react';
import './style.scss';

import Navigator from 'Components/Navigator/render';

function AboutPage() {
    return (
        <div className="about">
            <h1>About page</h1>
            <hr className="about__hr"/>
            <Navigator />
        </div>
    );
}

export default AboutPage;
