import './style.scss';

import View from 'Core/view';
import Thanks from 'Components/Thanks/render';
import Footer from 'Components/Footer/render';

class HomeView extends View {
    constructor() {
        super();
    }

    static HTML =
`<div class='page'>
    ${Thanks()}
    ${Footer()}
</div>`;

    setvDOM() {
        this.vDOM.self = document.querySelector('.page');
    }
}

export default HomeView;
