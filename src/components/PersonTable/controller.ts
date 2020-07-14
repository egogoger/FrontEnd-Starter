import PersonTableView from 'Components/PersonTable/view';
import PersonModel from 'src/models/PersonModel';
import Controller from 'Core/controller';

class PersonTable extends Controller {
    view: PersonTableView;

    constructor() {
        super();
        this.view = new PersonTableView();
    }

    public controllerDidMount(): void {
        super.controllerDidMount();
        this.showLoading();
        this.addListener(this.view.self, 'click', this.onItemClick.bind(this));
        setTimeout(this.showPersons.bind(this), 1000);
    }

    public showLoading(): void {
        this.view.showLoading();
    }

    public showPersons(): void {
        PersonModel.instance.loadPersons().then(ps => this.view.showPersons(ps));
    }

    public onItemClick(e: Event): void {
        const t = e.target as Element;
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
