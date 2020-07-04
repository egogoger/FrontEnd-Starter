import * as React from 'react';
import './style.scss';

import SetupsListItem from 'Components/SetupsListItem/render';
import { Setup } from 'Interfaces';

interface IProps {
    setups: Setup[]
}

function SetupsList(props: IProps):JSX.Element {
    return (
        <div className='setups-list'>
            {props.setups.map((item, index) => <SetupsListItem setup={item} index={index + 1} key={item.link}/>)}
        </div>
    )
}

export default SetupsList;
