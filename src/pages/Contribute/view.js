import './style.scss';

import View from 'Core/view';
import Footer from 'Components/Footer/render';
import Data from 'Static/data';
import Contribution from 'Components/Contribution/render';

class ContributesView extends View {
    constructor() {
        super();
    }

    static HTML =
`<div class='page'>
    <div class='contribute'>
        <h1>Contribute</h1>
        <div class="contribute__ways">
            ${Data.Contributions.reduce((output, c) => output + Contribution(c), '')}
        </div>
    </div>
    ${Footer()}
</div>`;

    setvDOM() {
        this.vDOM.self = document.querySelector('.contribute');
    }
}

export default ContributesView;
