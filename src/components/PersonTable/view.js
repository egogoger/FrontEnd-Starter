import './style.scss';

import PersonTableItemRender from 'Components/PersonTableItem/render';
import {removeAllChildrenFrom} from 'Utils/htmlHelpers';
import View from 'Core/view';

class PersonTableView extends View {
    constructor() {
        super();
    }

    didRender() {
        super.didRender();
        this.showLoading();
    }

    showLoading() {
        removeAllChildrenFrom(this.self);
        this.self.insertAdjacentHTML('afterbegin',
            '<tr><th>Loading...</th><th>Loading...</th><th>Loading...</th></tr>');
    }

    async showPersons(persons) {
        removeAllChildrenFrom(this.self);
        this.self.insertAdjacentHTML('afterbegin',
            persons.reduce((output, person) => output + PersonTableItemRender(person), ''));
    }

    static HTML =
`<table class='person-table'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>`;

    setvDOM() {
        this.vDOM.self = document.querySelector('.person-table tbody');
    }

    get self() {
        return this.vDOM.self;
    }
}

export default PersonTableView;
