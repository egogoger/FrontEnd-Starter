import './style.scss';

import {Setup} from 'Interfaces';
import {CONST} from 'Constants';
import JSIcon from 'Static/icons/js.svg';
import TSIcon from 'Static/icons/ts.svg';
import ReactIcon from 'Static/icons/react.svg';
import ReduxIcon from 'Static/icons/redux.svg';

function SetupsListItem(setup: Setup, index: number): string {
    return `
<div class='setups-list-item'>
    <h2 class='setups-list-item__header'>Setup ${index}</h2>
    <ul class='setups-list-item__stack'>
        ${setup.stack.reduce((output, tech) => {
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
        return `<li><img src=${icon} alt=${tech} />${tech}</li>` + output;
    }, '')}
    </ul>
    <a class='setups-list-item__link' href=${setup.link} target='_blank' rel='noopener noreferrer'>Branch &#8594;</a>
</div>`
}

export default SetupsListItem;
