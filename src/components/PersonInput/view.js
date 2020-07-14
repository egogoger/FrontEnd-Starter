import './style.scss';

import View from 'src/core/view';

class PersonInputRender extends View {
    constructor() {
        super();
        this.vDOM = {
            ...this.vDOM,
            nameInput: null,
            surnameInput: null,
        }
    }

    clearInputs() {
        this.nameInput.value = '';
        this.surnameInput.value = '';
    }

    setvDOM() {
        this.vDOM.self = document.querySelector('.person-input');
        this.vDOM.nameInput = this.form.querySelector('input[name="name"]');
        this.vDOM.surnameInput = this.form.querySelector('input[name="surname"]');
    }

    static HTML = `
<form class='person-input'>
    <input
        name='name'
        type='text'
        placeholder='Name'
    />
    <input
        name='surname'
        type='text'
        placeholder='Surname'
    />
    <input type='submit' value='Add' />
</form>`;

    get form() {
        return this.vDOM.self;
    }

    get nameInput() {
        return this.vDOM.nameInput;
    }

    get surnameInput() {
        return this.vDOM.surnameInput;
    }
}

export default PersonInputRender;
