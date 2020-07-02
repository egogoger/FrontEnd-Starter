import * as React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

function Navigator():JSX.Element {
    return (
        <div className="navigator">
            <Link to="/" className="navigator__link">Home</Link>
            <Link to="/about" className="navigator__link">About</Link>
            <Link to="/dictys" className="navigator__link">Dictys</Link>
        </div>
    );
}

export default Navigator;
