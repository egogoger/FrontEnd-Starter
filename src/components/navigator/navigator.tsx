import * as React from 'react';
import { Link } from 'react-router-dom';

import './navigator.scss';

export default function Navigator() {
    return (
        <div className="navigator">
            <Link to="/" className="navigator__link">Home</Link>
            <Link to="/about" className="navigator__link">About</Link>
            <Link to="/dictys" className="navigator__link">Dictys</Link>
        </div>
    );
}
