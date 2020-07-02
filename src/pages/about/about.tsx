import * as React from 'react';
import './about.scss';

import Navigator from '../../components/Navigator/Render';

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
