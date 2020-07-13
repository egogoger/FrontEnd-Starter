import Controller from 'Core/controller';
import DemoView from './view';
import PersonInput from 'Components/PersonInput/smart';
import PersonModel from 'Models/PersonModel';
import PersonTable from 'Components/PersonTable/smart';

class DemoPage extends Controller {
    constructor(base: Element) {
        super(base);
        this.view = new DemoView();
        this.components = new Map();
        this.components.set('personInput', new PersonInput());
        this.components.set('personTable', new PersonTable());
    }

    controllerDidMount(): void {
        super.controllerDidMount();
        for (const comp of this.components.values()) {
            comp.didRender();
        }
        this.addListener(document.querySelector('.person-input'), 'submit', this.onSubmit.bind(this));
    }

    private onSubmit(e: Event): void {
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
