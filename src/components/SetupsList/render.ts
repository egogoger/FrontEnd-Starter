import './style.scss';

import {Setup} from 'Interfaces';
import SetupsListItem from 'Components/SetupListItem/render';

function SetupsList(setups: Setup[]): string {
    return `
<div class='setups-list'>
    ${setups.reduce((output, setup, index) => output + SetupsListItem(setup, index + 1), '')}
</div>`
}

export default SetupsList;
