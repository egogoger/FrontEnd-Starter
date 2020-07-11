import './style.scss';
import View from 'Core/view';
import Thanks from 'Components/Thanks/view';
import Footer from 'Components/Footer/view';

class HomeView extends View {
    constructor() {
        super();
    }

    public render(): string {
        return `<div class='page'>${Thanks()}${Footer()}</div>`
    }
}

export default HomeView;
