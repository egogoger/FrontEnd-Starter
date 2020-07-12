import {IComponent} from 'Interfaces';
import PersonTableRender from 'Components/PersonTable/view';

class PersonTable implements IComponent {
    view: PersonTableRender;

    constructor() {
        this.view = new PersonTableRender();
    }

    public didRender(): void {}

    // public showLoading(): void {
    //     this.view.showLoading();
    // }
}

export default PersonTable;
