import './style.scss';

import View from 'src/core/view';

class PersonTableButtonView extends View {
    constructor() {
        super();
    }

    static HTML =
`<div class='person-table-button'>
    <div class='person-table-button__icon'>&#215;</div>
    <label class='person-table-button__label'>Remove all persons</label>
</div>`;

    setvDOM() {
        this.vDOM.self = document.querySelector('.person-table-button');
    }

    get self() {
        return this.vDOM.self;
    }
}

export default PersonTableButtonView;
