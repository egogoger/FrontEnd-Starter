import Controller from 'Core/controller';
import HomeView from './view';

class HomePage extends Controller {
    view: HomeView;

    constructor(base: Element) {
        super(base);
        this.view = new HomeView();
    }
}

export default HomePage;
