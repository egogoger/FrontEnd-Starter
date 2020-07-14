import Controller from 'Core/controller';
import HomeView from './view';

class HomePage extends Controller {
    constructor(base) {
        super(base);
        this.view = new HomeView();
    }
}

export default HomePage;
