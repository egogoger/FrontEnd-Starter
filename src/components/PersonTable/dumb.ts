import './style.scss';

import PersonTableItemRender from 'Components/PersonTableItem/view';
import {Person} from 'Interfaces';
import {removeAllChildrenFrom} from 'Utils/htmlHelpers';
import DumbComponent from 'Core/dumbComponent';

class PersonTableRender extends DumbComponent {
    constructor() {
        super();
        this.vDOM = {
            body: null,
        };
    }

    public didRender(): void {
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

    public setvDOM(): void {
        if (!this.vDOM.body) {
            this.vDOM.body = document.querySelector('.person-table tbody');
        }
    }

    get body(): HTMLTableElement {
        return this.vDOM.body as HTMLTableElement;
    }
}

export default PersonTableRender;
