import * as React from 'react';
import './style.scss';

import SetupsListItem from 'src/components/SetupsListItem/render';

function SetupsList(props) {
    return (
        <div className='setups-list'>
            {props.setups.map((item, index) => <SetupsListItem setup={item} index={index + 1} key={item.link}/>)}
        </div>
    )
}

export default SetupsList;
