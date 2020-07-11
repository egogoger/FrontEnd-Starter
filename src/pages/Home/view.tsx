import './style.scss';
import View from 'Core/view';
import Thanks from 'Components/Thanks/Thanks';

class HomeView extends View {
    constructor() {
        super();
    }

    public render(): string {
        return `<div class='home'>home iopta${Thanks()}</div>`
    }
}

export default HomeView;
