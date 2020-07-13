import Controller from 'Core/controller';
import DemoView from './view';
import PersonInput from 'Components/PersonInput/smart';
import PersonModel from 'Models/PersonModel';
import PersonTable from 'Components/PersonTable/controller';
import PersonTableButton from 'Components/PersonTableButton/controller';

class DemoPage extends Controller {
    constructor(base: Element) {
        super(base);
        this.view = new DemoView();
        this.components.set('personInput', new PersonInput());
        this.components.set('personTable', new PersonTable());
        this.components.set('personTableButton', new PersonTableButton());
    }

    controllerDidMount(): void {
        super.controllerDidMount();
        const personInput = this.components.get('personInput') as PersonInput;
        this.addListener(personInput.view.form, 'submit', this.onSubmit.bind(this));
        const button = this.components.get('personTableButton') as PersonTableButton;
        this.addListener(button.view.self, 'click', this.handleClickOnButton.bind(this));
    }

    private onSubmit(e: Event): void {
        e.preventDefault();
        const form = this.components.get('personInput') as PersonInput;
        let name = form.view.nameInput.value;
        let surname = form.view.surnameInput.value;
        if (name.length === 0 || surname.length === 0) {
            return;
        }
        PersonModel.instance.savePerson({name, surname}).then(() => {
            name = '';
            surname = '';
            const personTable = this.components.get('personTable') as PersonTable;
            personTable.showPersons();
        });
    }

    private handleClickOnButton() {
        PersonModel.instance.deleteAllPersons().then(() => {
            const personTable = this.components.get('personTable') as PersonTable;
            personTable.showPersons();
        });
    }
}

export default DemoPage;
