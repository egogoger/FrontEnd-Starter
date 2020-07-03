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
            <h3 className='setups-list-item__header'>Setup {props.index}</h3>
            <ul className='setups-list-item__stack'>
                {props.setup.stack.map(tech => {
                    switch (tech) {
                    case CONST.TECH.JS:
                        return <li key={tech}>
                            <img src={JSIcon} alt={tech}/>
                            {tech}
                        </li>;
                    case CONST.TECH.TS:
                        return <li key={tech}>
                            <img src={TSIcon} alt={tech}/>
                            {tech}
                        </li>;
                    case CONST.TECH.REACT:
                        return <li key={tech}>
                            <img src={ReactIcon} alt={tech}/>
                            {tech}
                        </li>;
                    case CONST.TECH.REDUX:
                        return <li key={tech}>
                            <img src={ReduxIcon} alt={tech}/>
                            {tech}
                        </li>;
                    }
                })}
            </ul>
            <a className='setups-list-item__link' href={props.setup.link} target='_blank' rel='noopener noreferrer'>Branch &#8594;</a>
        </div>
    )
}

export default SetupsListItem;
