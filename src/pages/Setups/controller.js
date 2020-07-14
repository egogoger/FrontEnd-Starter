import Controller from 'Core/controller';
import SetupsView from './view';

class SetupsPage extends Controller {
    view;

    constructor(base) {
        super(base);
        this.view = new SetupsView();
    }
}

export default SetupsPage;
