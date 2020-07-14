import Controller from 'Core/controller';
import DemoView from './view';
import PersonInput from 'Components/PersonInput/controller';
import PersonModel from 'Models/PersonModel';
import PersonTable from 'Components/PersonTable/controller';
import PersonTableButton from 'Components/PersonTableButton/controller';

class DemoPage extends Controller {
    constructor(base) {
        super(base);
        this.view = new DemoView();
        this.components.set('personInput', new PersonInput());
        this.components.set('personTable', new PersonTable());
        this.components.set('personTableButton', new PersonTableButton());
    }

    controllerDidMount() {
        super.controllerDidMount();
        const personInput = this.components.get('personInput');
        this.addListener(personInput.view.form, 'submit', this.onSubmit.bind(this));
        const button = this.components.get('personTableButton');
        this.addListener(button.view.self, 'click', this.handleClickOnButton.bind(this));
    }

    onSubmit(e) {
        e.preventDefault();
        const form = this.components.get('personInput');
        const name = form.view.nameInput.value;
        const surname = form.view.surnameInput.value;
        if (name.length === 0 || surname.length === 0) {
            return;
        }
        PersonModel.instance.savePerson({name, surname}).then(() => {
            form.view.clearInputs();
            form.view.nameInput.focus();
            const personTable = this.components.get('personTable');
            personTable.showPersons();
        });
    }

    handleClickOnButton() {
        PersonModel.instance.deleteAllPersons().then(() => {
            const personTable = this.components.get('personTable');
            personTable.showPersons();
        });
    }
}

export default DemoPage;
