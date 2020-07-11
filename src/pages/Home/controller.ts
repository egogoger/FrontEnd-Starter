import Controller from 'Core/controller';
import View from 'Core/view';
import HomeView from './view';

class HomePage extends Controller {
    view: View;

    constructor(base: Element) {
        super(base);
        this.view = new HomeView();
    }
}

export default HomePage;
