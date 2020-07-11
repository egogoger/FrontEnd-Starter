import './style.scss';
import {Setup} from 'Interfaces';
import {CONST} from 'Constants';
import JSIcon from 'Static/icons/js.svg';
import TSIcon from 'Static/icons/ts.svg';
import ReactIcon from 'Static/icons/react.svg';
import ReduxIcon from 'Static/icons/redux.svg';

function SetupsListItem(setup: Setup, index: number): string {
    return `<div class='setups-list-item'>
    <h2 class='setups-list-item__header'>Setup ${index}</h2>
    <ul class='setups-list-item__stack'>
        ${setup.stack.map(tech => {
        switch (tech) {
        case CONST.TECH.JS:
            return `<li>
                <img src=${JSIcon} alt=${tech}/>
                ${tech}
            </li>`;
        case CONST.TECH.TS:
            return `<li>
                <img src=${TSIcon} alt=${tech}/>
                ${tech}
            </li>`;
        case CONST.TECH.REACT:
            return `<li>
                <img src=${ReactIcon} alt=${tech}/>
                ${tech}
            </li>`;
        case CONST.TECH.REDUX:
            return `<li>
                <img src=${ReduxIcon} alt=${tech}/>
                ${tech}
            </li>`;
        }
    })}
    </ul>
    <a class='setups-list-item__link' href=${setup.link} target='_blank' rel='noopener noreferrer'>Branch &#8594;</a>
</div>`
}

export default SetupsListItem;
