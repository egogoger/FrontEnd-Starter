import * as React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

function Footer():JSX.Element {
    return (
        <div className="footer">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/setups" className="footer__link">Setups</Link>
            <a className="footer__link" href="https://github.com/EgorBedov" target="_blank" rel="noopener noreferrer">Author</a>
            <Link to="/demo" className="footer__link">Demo</Link>
            <Link to="/contribute" className="footer__link">Contribute</Link>
        </div>
    );
}

export default Footer;
