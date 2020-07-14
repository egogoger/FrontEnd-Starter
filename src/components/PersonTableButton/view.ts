import './style.scss';

import View from 'Core/view';

class PersonTableButtonView extends View {
    constructor() {
        super();
    }

    static HTML =
`<div class='person-table-button'>
    <div class='person-table-button__icon'>&#215;</div>
    <label class='person-table-button__label'>Remove all persons</label>
</div>`;

    public setvDOM(): void {
        this.vDOM.self = document.querySelector('.person-table-button');
    }

    get self(): HTMLDivElement {
        return this.vDOM.self as HTMLDivElement;
    }
}

export default PersonTableButtonView;
