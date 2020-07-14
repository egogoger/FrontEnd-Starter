import PersonTableButtonView from 'src/components/PersonTableButton/view';
import Controller from 'src/core/controller';

class PersonTableButton extends Controller {
    view;

    constructor() {
        super();
        this.view = new PersonTableButtonView();
    }
}

export default PersonTableButton;
