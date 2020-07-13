import './style.scss';

import DumbComponent from 'Core/dumbComponent';

class PersonInputRender extends DumbComponent {
    constructor() {
        super();
        this.vDOM = {
            form: null,
            nameInput: null,
            surnameInput: null,
        }
    }

    public setvDOM(): void {
        if (!this.vDOM.form) {
            this.vDOM.form = document.querySelector('.person-input');
        }
        if (!this.vDOM.nameInput) {
            this.vDOM.nameInput = this.vDOM.form.querySelector('input[name="name"]');
        }
        if (!this.vDOM.surnameInput) {
            this.vDOM.surnameInput = this.vDOM.form.querySelector('input[name="surname"]');
        }
    }

    render(): string {
        return PersonInputRender.HTML;
    }

    static get HTML(): string {
        return `
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
</form>`
    }

    get form(): HTMLFormElement {
        return this.vDOM.form as HTMLFormElement;
    }

    get nameInput(): HTMLInputElement {
        return this.vDOM.nameInput as HTMLInputElement;
    }

    get surnameInput(): HTMLInputElement {
        return this.vDOM.surnameInput as HTMLInputElement;
    }
}

export default PersonInputRender;
