import Controller from 'Core/controller';
import ContributesView from './view';

class ContributePage extends Controller {
    view;

    constructor(base) {
        super(base);
        this.view = new ContributesView();
    }
}

export default ContributePage;
