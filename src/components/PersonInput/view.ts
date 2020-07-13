import './style.scss';

import View from 'Core/view';

class PersonInputRender extends View {
    constructor() {
        super();
        this.vDOM = {
            ...this.vDOM,
            nameInput: null,
            surnameInput: null,
        }
    }

    public clearInputs(): void {
        this.nameInput.value = '';
        this.surnameInput.value = '';
    }

    public setvDOM(): void {
        this.vDOM.self = document.querySelector('.person-input');
        this.vDOM.nameInput = this.form.querySelector('input[name="name"]');
        this.vDOM.surnameInput = this.form.querySelector('input[name="surname"]');
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
        return this.vDOM.self as HTMLFormElement;
    }

    get nameInput(): HTMLInputElement {
        return this.vDOM.nameInput as HTMLInputElement;
    }

    get surnameInput(): HTMLInputElement {
        return this.vDOM.surnameInput as HTMLInputElement;
    }
}

export default PersonInputRender;
