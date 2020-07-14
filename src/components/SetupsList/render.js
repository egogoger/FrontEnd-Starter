import './style.scss';

import SetupsListItem from 'Components/SetupListItem/render';

function SetupsList(setups) {
    return `
<div class='setups-list'>
    ${setups.reduce((output, setup, index) => output + SetupsListItem(setup, index + 1), '')}
</div>`
}

export default SetupsList;
