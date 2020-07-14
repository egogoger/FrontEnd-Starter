import PersonInputRender from 'Components/PersonInput/view';
import Controller from 'src/core/controller';

class PersonInput extends Controller {
    view: PersonInputRender;

    constructor() {
        super();
        this.view = new PersonInputRender();
    }
}

export default PersonInput;
