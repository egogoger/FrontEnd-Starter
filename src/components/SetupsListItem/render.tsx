import * as React from 'react';
import './style.scss';

import { Setup } from 'Interfaces';
import { CONST } from 'Constants';
import JSIcon from 'Static/icons/js.svg';
import TSIcon from 'Static/icons/ts.svg';
import ReactIcon from 'Static/icons/react.svg';
import ReduxIcon from 'Static/icons/redux.svg';

interface IProps {
    setup: Setup,
    index: number
}

function SetupsListItem(props: IProps):JSX.Element {
    return (
        <div className='setups-list-item'>
            <h2 className='setups-list-item__header'>Setup {props.index}</h2>
            <ul className='setups-list-item__stack'>
                {props.setup.stack.map(tech => {
                    let icon = null;
                    switch (tech) {
                    case CONST.TECH.JS:
                        icon = JSIcon;
                        break;
                    case CONST.TECH.TS:
                        icon = TSIcon;
                        break;
                    case CONST.TECH.REACT:
                        icon = ReactIcon;
                        break;
                    case CONST.TECH.REDUX:
                        icon = ReduxIcon;
                        break;
                    }
                    return <li key={tech}>
                        <img src={icon} alt={tech}/>
                        {tech}
                    </li>;
                })}
            </ul>
            <a className='setups-list-item__link' href={props.setup.link} target='_blank' rel='noopener noreferrer'>Branch &#8594;</a>
        </div>
    )
}

export default SetupsListItem;
