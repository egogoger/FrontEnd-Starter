import * as React from 'react';
import './style.scss';

import Data from 'Static/data';

function SetupsListItem(props) {
    return (
        <div className='setups-list-item'>
            <h2 className='setups-list-item__header'>Setup {props.index}</h2>
            <ul className='setups-list-item__stack'>
                {props.setup.stack.map(tech => {
                    return <li key={tech}>
                        <img src={Data.Icons.get(tech)} alt={tech}/>
                        {tech}
                    </li>;
                })}
            </ul>
            <a className='setups-list-item__link' href={props.setup.link} target='_blank' rel='noopener noreferrer'>Branch &#8594;</a>
        </div>
    )
}

export default SetupsListItem;
