import Controller from 'Core/controller';
import View from 'Core/view';
import ContributesView from './view';

class ContributePage extends Controller {
    view: View;

    constructor(base: Element) {
        super(base);
        this.view = new ContributesView();
    }
}

export default ContributePage;
