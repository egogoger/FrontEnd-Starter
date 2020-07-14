import './style.scss';

import {Setup} from 'Interfaces';
import Data from 'Static/data';

function SetupsListItem(setup: Setup, index: number): string {
    return `
<div class='setups-list-item'>
    <h2 class='setups-list-item__header'>Setup ${index}</h2>
    <ul class='setups-list-item__stack'>
        ${setup.stack.reduce((output, tech) => {
        return `<li><img src=${Data.Icons.get(tech)} alt=${tech} />${tech}</li>` + output;
    }, '')}
    </ul>
    <a class='setups-list-item__link' href=${setup.link} target='_blank' rel='noopener noreferrer'>Branch &#8594;</a>
</div>`
}

export default SetupsListItem;
