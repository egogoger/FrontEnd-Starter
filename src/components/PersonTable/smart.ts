import PersonTableRender from 'Components/PersonTable/dumb';
import PersonModel from 'Models/PersonModel';
import SmartComponent from 'Core/smartComponent';

class PersonTable extends SmartComponent {
    dumb: PersonTableRender;

    constructor() {
        super();
        this.dumb = new PersonTableRender();
    }

    public didRender(): void {
        super.didRender();
        this.showLoading();
        setTimeout(this.showPersons.bind(this), 1000);
    }

    public showLoading(): void {
        this.dumb.showLoading();
    }

    public showPersons(): void {
        PersonModel.instance.loadPersons()
            .then(ps => this.dumb.showPersons(ps))
            .then(() => {
                // this.addListener(this.dumb.body, 'click', this.onItemClick);
            });
    }

    // public onItemClick(e: Event): void {
    //
    // }
}

export default PersonTable;
