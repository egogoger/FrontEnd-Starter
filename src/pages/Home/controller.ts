import Controller from '../../core/controller';
import View from 'Core/view';
import HomeView from 'Pages/Home/view';

class HomePage extends Controller {
    view: View;

    constructor(base: Element) {
        super(base);
        this.view = new HomeView();
    }

    protected addAllListeners(): void {
        this.addListener(document.querySelector('.home'), 'click', this.handleClickOnHome);
    }

    handleClickOnHome(): void {
        console.log('click');
        console.log(this);
    }
}

export default HomePage;
