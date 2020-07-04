import * as React from 'react';
import './style.scss';

import { Contribution } from 'Interfaces';

function ContributionRender(props:Contribution):JSX.Element {
    return (
        <div className='contribution'>
            <img className='contribution__icon' src={props.icon} alt={props.title}/>
            <a className='contribution__title' href={props.title} target='_blank' rel='noopener noreferrer'>
                <h1>{props.title}</h1>
            </a>
            <div className='contribution__message'>{props.message}</div>
        </div>
    );
}

export default ContributionRender;
