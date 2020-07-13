import SmartComponent from 'Core/smartComponent';
import PersonInputRender from 'Components/PersonInput/dumb';

class PersonInput extends SmartComponent {
    dumb: PersonInputRender;

    constructor() {
        super();
        this.dumb = new PersonInputRender();
    }

    didRender(): void {
        super.didRender();
    }
}

export default PersonInput;
