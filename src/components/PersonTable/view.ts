import './style.scss';

import PersonTableItemRender from 'Components/PersonTableItem/view';
import { Person } from 'Interfaces';
import View from 'Core/view';

class PersonTableRender extends View {
    constructor() {
        super();
    }

    // public showLoading(): void {
    //     document.querySelector('.person-table').
    // }

    render(): string {
        return PersonTableRender.HTML;
    }

    static get HTML(): string {
        return `
<table class='person-table'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>`
    }
}

export default PersonTableRender;
