import Controller from 'Core/controller';
import View from 'Core/view';
import SetupsView from './view';

class SetupsPage extends Controller {
    view: View;

    constructor(base: Element) {
        super(base);
        this.view = new SetupsView();
    }
}

export default SetupsPage;
