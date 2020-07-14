import './style.scss';

import View from 'Core/view';
import Footer from 'Components/Footer/render';
import SetupsList from 'Components/SetupsList/render';
import Data from 'static/data';

class SetupsView extends View {
    constructor() {
        super();
    }

    static HTML =
`<div class='page'>
    <div class="setups">
        <h1>Setups</h1>
        ${SetupsList(Data.Setups)}
    </div>
    ${Footer()}
</div>`;

    setvDOM() {
        this.vDOM.self = document.querySelector('.setups');
    }
}

export default SetupsView;
