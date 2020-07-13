import './style.scss';

import { Person } from 'Interfaces';

function PersonTableItemRender(person: Person): string {
    return `
<tr class='person-table-item'>
    <td>${person.name}</td>
    <td>${person.surname}</td>
    <td class='person-table-item__action'>&#215;</td>
</tr>`
}

export default PersonTableItemRender;
