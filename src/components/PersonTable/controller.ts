import PersonTableView from 'Components/PersonTable/view';
import PersonModel from 'Models/PersonModel';
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
        setTimeout(this.showPersons.bind(this), 1000);
    }

    public showLoading(): void {
        this.view.showLoading();
    }

    public showPersons(): void {
        PersonModel.instance.loadPersons()
            .then(ps => this.view.showPersons(ps))
            .then(() => {
                // this.addListener(this.dumb.body, 'click', this.onItemClick);
            });
    }

    // public onItemClick(e: Event): void {
    //
    // }
}

export default PersonTable;
