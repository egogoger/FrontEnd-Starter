import './style.scss';
import View from 'Core/view';

class HomeView extends View {
    constructor() {
        super();
    }

    public render(): string {
        return `<div class='home'>home iopta</div>`
    }
}

export default HomeView;
