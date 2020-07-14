import PersonInputRender from 'src/components/PersonInput/view';
import Controller from 'src/core/controller';

class PersonInput extends Controller {
    view;

    constructor() {
        super();
        this.view = new PersonInputRender();
    }
}

export default PersonInput;
