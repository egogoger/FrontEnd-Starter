import './style.scss';
import {Setup} from 'Interfaces';
import SetupsListItem from 'Components/SetupListItem/view';

function SetupsList(setups: Setup[]): string {
    return `<div class='setups-list'
    ${setups.map((setup, index) => SetupsListItem(setup, index + 1))}
</div>`
}

export default SetupsList;
