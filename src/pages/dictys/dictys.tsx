import * as React from 'react';
import Navigator from '../../components/navigator/navigator';

import './dictys.scss';

export default function DictysPage() {
    return (
        <div className="dictys">
            <h1>Dictys page</h1>
            <hr className="home__hr"/>
            <Navigator />
        </div>
    );
}
