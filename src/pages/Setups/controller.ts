import Controller from 'Core/controller';
import View from 'Core/view';
import SetupsView from './view';

class SetupsPage extends Controller {
    view: View;

    constructor(base: Element) {
        super(base);
        this.view = new SetupsView();
    }

    protected addAllListeners(): void {
        this.addListener(document.querySelector('.home'), 'click', this.handleClickOnHome);
    }

    handleClickOnHome(): void {
        console.log('setups click');
        console.log(this);
    }
}

export default SetupsPage;
