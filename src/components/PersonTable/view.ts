import './style.scss';

import PersonTableItemRender from 'Components/PersonTableItem/render';
import {Person} from 'Interfaces';
import {removeAllChildrenFrom} from 'Utils/htmlHelpers';
import View from 'Core/view';

class PersonTableView extends View {
    constructor() {
        super();
    }

    public didRender(): void {
        super.didRender();
        this.showLoading();
    }

    public showLoading(): void {
        removeAllChildrenFrom(this.vDOM.body);
        this.vDOM.body.insertAdjacentHTML('afterbegin',
            '<tr><th>Loading...</th><th>Loading...</th><th>Loading...</th></tr>');
    }

    public async showPersons(persons: Person[]): Promise<void> {
        removeAllChildrenFrom(this.vDOM.body);
        this.vDOM.body.insertAdjacentHTML('afterbegin',
            persons.reduce((output, person) => output + PersonTableItemRender(person), ''));
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

    public setvDOM(): void {
        this.vDOM.self = document.querySelector('.person-table tbody');
    }

    get self(): HTMLTableElement {
        return this.vDOM.self as HTMLTableElement;
    }
}

export default PersonTableView;
