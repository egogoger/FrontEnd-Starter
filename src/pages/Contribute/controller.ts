import Controller from 'Core/controller';
import ContributesView from './view';

class ContributePage extends Controller {
    view: ContributesView;

    constructor(base: Element) {
        super(base);
        this.view = new ContributesView();
    }
}

export default ContributePage;
