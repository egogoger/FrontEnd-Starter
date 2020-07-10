import Controller from '../../core/controller';
import View from 'Core/view';

class HomePage extends Controller {
    view: View;
    // listeners: Object;

    constructor() {
        super();
    }

    public showSelf(): void {
        this.view.hideSelf();
    }

    protected pageDidShow(): void {}

    public hideSelf(): void {
        this.removeAllListeners();
        this.view.hideSelf();
    }

    public addListener(): void {

    }

    public removeListener(): void {

    }

    protected removeAllListeners(): void {

    }


}

export default HomePage;
