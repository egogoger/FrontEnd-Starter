import './style.scss';

function PersonTableItemRender(person) {
    return `
<tr class='person-table-item'>
    <td>${person.name}</td>
    <td>${person.surname}</td>
    <td class='person-table-item__action'>&#215;</td>
</tr>`;
}

export default PersonTableItemRender;
