import Controller from 'Core/controller';
import DemoView from './view';
import PersonInput from 'Components/PersonInput/controller';
import {Person} from 'Interfaces';
import PersonModel from 'Models/PersonModel';

class DemoPage extends Controller {
    constructor(base: Element) {
        super(base);
        this.view = new DemoView();
        this.components = new Map([
            ['personInput', new PersonInput()],
        ]);
    }

    controllerDidMount(): void {
        super.controllerDidMount();
        this.addListener(document.querySelector('.person-input'), 'submit', this.onSubmit.bind(this));
    }

    private onSubmit(e: Event) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        let tmpInput = form.querySelector('input[name="name"]') as HTMLInputElement;
        const name = tmpInput.value;
        tmpInput = form.querySelector('input[name="surname"]') as HTMLInputElement;
        const surname = tmpInput.value;
        if (name.length === 0 || surname.length === 0) {
            return;
        }
        PersonModel.instance.savePerson({name, surname});
    }
}

export default DemoPage;
