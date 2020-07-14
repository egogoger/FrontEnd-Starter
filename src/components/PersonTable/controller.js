import PersonTableView from 'Components/PersonTable/view';
import PersonModel from 'Models/PersonModel';
import Controller from 'Core/controller';

class PersonTable extends Controller {
    view;

    constructor() {
        super();
        this.view = new PersonTableView();
    }

    controllerDidMount() {
        super.controllerDidMount();
        this.showLoading();
        this.addListener(this.view.self, 'click', this.onItemClick.bind(this));
        setTimeout(this.showPersons.bind(this), 1000);
    }

    showLoading() {
        this.view.showLoading();
    }

    showPersons() {
        PersonModel.instance.loadPersons().then(ps => this.view.showPersons(ps));
    }

    onItemClick(e) {
        const t = e.target;
        if (!t.matches('.person-table-item__action')) {
            return;
        }
        const inputs = t.closest('.person-table-item').querySelectorAll('td');

        const person = {
            name: inputs[0].innerText,
            surname: inputs[1].innerText,
        };
        PersonModel.instance.deletePerson(person).then(() => this.showPersons());
    }
}

export default PersonTable;
