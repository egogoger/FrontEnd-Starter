import './style.scss';

import View from 'Core/view';
import Footer from 'Components/Footer/render';
import PersonInputRender from 'Components/PersonInput/view';
import PersonTableView from 'Components/PersonTable/view';
import PersonTableButton from 'Components/PersonTableButton/view';

class DemoView extends View {
    constructor() {
        super();
    }

    setvDOM() {
        this.vDOM.self = document.querySelector('.demo');
    }

    static HTML =
`<div class='page'>
    <div class="demo">
        <h1>Demo</h1>
        ${PersonInputRender.HTML}
        ${PersonTableView.HTML}
        ${PersonTableButton.HTML}
    </div>
    ${Footer()}
</div>`;
}

export default DemoView;
