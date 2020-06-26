import * as React from 'react';
import Navigator from '../../components/navigator/navigator';

import './about.scss';

export default function AboutPage() {
    return (
        <div className="about">
            <h1>About page</h1>
            <hr className="about__hr"/>
            <Navigator />
        </div>
    );
}
