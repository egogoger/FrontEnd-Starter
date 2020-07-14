import PersonTableButtonView from 'Components/PersonTableButton/view';
import Controller from 'src/core/controller';

class PersonTableButton extends Controller {
    view: PersonTableButtonView;

    constructor() {
        super();
        this.view = new PersonTableButtonView();
    }
}

export default PersonTableButton;
