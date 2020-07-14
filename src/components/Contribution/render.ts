import './style.scss';

import {Contribution} from 'Interfaces';

function Contribution(c: Contribution): string {
    return `
<div class='contribution'>
    <img class='contribution__icon' src=${c.icon} alt=${c.title}/>
    <a class='contribution__title' href=${c.link} target='_blank' rel='noopener noreferrer'>
        <h1>${c.title}</h1>
    </a>
    <div class='contribution__message'>${c.message}</div>
</div>`
}

export default Contribution;
